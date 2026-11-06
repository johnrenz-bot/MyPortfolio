import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "views.json");

// In-memory fallback if filesystem encounters read/write limitations
let inMemoryViews: number | null = null;

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch {}
}

async function getStoredViews(): Promise<number> {
  if (inMemoryViews !== null) {
    return inMemoryViews;
  }

  await ensureDataDir();

  try {
    const content = await fs.readFile(DATA_FILE, "utf-8");
    const data = JSON.parse(content);
    const count = typeof data.views === "number" ? data.views : 1;
    inMemoryViews = count;
    return count;
  } catch {
    const initial = 1;
    inMemoryViews = initial;
    try {
      await fs.writeFile(
        DATA_FILE,
        JSON.stringify({ views: initial, initializedAt: new Date().toISOString() }, null, 2),
        "utf-8"
      );
    } catch {}
    return initial;
  }
}

async function incrementStoredViews(): Promise<number> {
  await ensureDataDir();

  let current = inMemoryViews ?? 1;

  try {
    const content = await fs.readFile(DATA_FILE, "utf-8");
    const data = JSON.parse(content);
    if (typeof data.views === "number") {
      current = data.views;
    }
  } catch {}

  const updated = current + 1;
  inMemoryViews = updated;

  try {
    await fs.writeFile(
      DATA_FILE,
      JSON.stringify({ views: updated, lastUpdated: new Date().toISOString() }, null, 2),
      "utf-8"
    );
  } catch (writeErr) {
    console.warn("Could not write persistent views file:", writeErr);
  }

  return updated;
}

export async function GET() {
  const views = await getStoredViews();
  return NextResponse.json(
    { views },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}

export async function POST() {
  const views = await incrementStoredViews();
  return NextResponse.json(
    { views },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}

