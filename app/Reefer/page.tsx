"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ReeferCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-16 transition group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition" />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>

        <div className="mb-16">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">UI/UX Case Study</p>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">REEFER</h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                A modern e-commerce platform designed to deliver engaging user experiences through thoughtful interface design and user-centered workflows. Created as a deep-dive project by a self-taught UI/UX designer.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Role</p>
              <p className="text-gray-900 font-semibold">UI/UX Designer</p>
              <p className="text-xs text-gray-500 mt-1">Team Lead (Self-Taught)</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Timeline</p>
              <p className="text-gray-900 font-semibold">6 Weeks</p>
              <p className="text-xs text-gray-500 mt-1">March – April 2026</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Company</p>
              <p className="text-gray-900 font-semibold">Alpha Centauri</p>
              <p className="text-xs text-gray-500 mt-1">Garments / Clothing</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Deliverables</p>
              <p className="text-gray-900 font-semibold">20+ Screens</p>
              <p className="text-xs text-gray-500 mt-1">Web Design</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 mb-16">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                REEFER is a modern e-commerce platform designed to connect contemporary urban fashion with a younger demographic that values both aesthetics and seamless user experiences. The platform balances bold visual design with clean, structured navigation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a self-taught UI/UX designer promoted to Team Lead, I was responsible for bridging the gap between raw classic culture and professional e-commerce standards. I developed the complete design system layout, managed cross-functional design workflows, and translated high-level stakeholder requirements into an optimized user journey ready for development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-gray-200 p-12 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center border border-gray-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-700 rounded-md"></div>
                </div>
                <p className="text-gray-700 font-semibold">Platform Design</p>
                <p className="text-gray-600 text-sm mt-2">E-Commerce Interface</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Brand Alignment</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Before initiating the wireframing phase, the client and stakeholder management provided a curated list of benchmark industry references to guide the aesthetic direction. The goal was to study their layouts and visual trends without cloning the chaotic or over-cluttered elements often found in independent alternative websites.
          </p>

          <div className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Client-Provided Reference Framework</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
              <div className="bg-white p-3 rounded border border-gray-200 font-semibold text-gray-800 text-sm">Free & Easy</div>
              <div className="bg-white p-3 rounded border border-gray-200 font-semibold text-gray-800 text-sm">HUF</div>
              <div className="bg-white p-3 rounded border border-gray-200 font-semibold text-gray-800 text-sm">PLEASURES</div>
              <div className="bg-white p-3 rounded border border-gray-200 font-semibold text-gray-800 text-sm">Vans</div>
              <div className="bg-white p-3 rounded border border-gray-200 font-semibold text-gray-800 text-sm">RVCA</div>
              <div className="bg-white p-3 rounded border border-gray-200 font-semibold text-gray-800 text-sm">Carrotsbyanwar</div>
              <div className="bg-white p-3 rounded border border-gray-200 font-semibold text-gray-800 text-sm">Fucking Awesome</div>
              <div className="bg-white p-3 rounded border border-gray-200 font-semibold text-gray-800 text-sm">Gnarly</div>
              <div className="bg-white p-3 rounded border border-gray-200 font-semibold text-gray-800 text-sm">Spades</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Challenge</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            The project required building a complete interface architecture from concept without predefined specifications. The primary challenge lay in extracting the premium, high-impact feel of brands like HUF and PLEASURES while strictly avoiding cluttered, flashy layouts that disrupt user conversion funnels. The final UI prioritizes professional, user-friendly layouts designed specifically for desktop web experiences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Design Evolution</h3>
              <p className="text-sm text-gray-600">
                Accommodating continuous stakeholder updates while keeping visual systems clean, professional, and unified.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg">💎</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Desktop Interface Layout</h3>
              <p className="text-sm text-gray-600">
                Designing detailed e-commerce web grids that preserve clear navigation logic and hierarchy across desktop viewports.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Team Leadership</h3>
              <p className="text-sm text-gray-600">
                Directing collaboration workflows and structural documentation within tight project sprint phases.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Process</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery & Research</h3>
                <p className="text-gray-600 leading-relaxed">
                  Conducted competitor profiling against the client's reference list. Mapped out user expectations for consumers aged 18–35 to align cultural trends with seamless navigation mechanics.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">User Flows & Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Structured critical touchpoints including product filtering, sizing variables, cart management, and high-conversion checkout flows.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wireframing & Prototyping</h3>
                <p className="text-gray-600 leading-relaxed">
                  Produced structural low-fidelity outlines to test functional assumptions before defining high-fidelity UI systems.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white font-bold text-lg flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Design & Iterations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Executed visual iterations matching classic layouts with minimal typography systems, resolving feedback cycles smoothly without introducing layout clutter.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white font-bold text-lg flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Design System Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Constructed a robust atomic UI token library in Figma, creating highly reusable button states, specialized input cards, navigation menus, and form templates for cross-team alignment.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white font-bold text-lg flex-shrink-0">
                6
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation & Developer Handoff</h3>
                <p className="text-gray-600 leading-relaxed">
                  Generated organized interface documentation containing state specifications, interactive design properties, and web grid patterns to ensure precise engineering alignment during technical handoff meetings.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features Designed</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-amber-300 transition">
              <h3 className="font-semibold text-gray-900 mb-3">Product Discovery Experience</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Designed a clear product discovery catalog layout utilizing comprehensive filtering tools. Product photography controls the grid space with stripped-back typography, relying on product aesthetics to drive purchasing metrics.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-amber-300 transition">
              <h3 className="font-semibold text-gray-900 mb-3">Web Interface Layout</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Formulated reliable desktop layouts through structured interface grids. Components are optimized to preserve legibility and interaction safety bounds on the desktop view layer.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-amber-300 transition">
              <h3 className="font-semibold text-gray-900 mb-3">Streamlined Checkout</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Engineered an optimized single-page checkout configuration with structural checkout status nodes, dropping drop-off ratios while building trust.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-amber-300 transition">
              <h3 className="font-semibold text-gray-900 mb-3">Component Library</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Built a solid UI design system to structure uniform layout behaviors, button interaction phases, and product card variations.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design System & Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Design Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Comprehensive typography and color system</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Reusable component specifications with interactive states</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Desktop layout spacing and grid guidelines</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Interactive state documentation and transitions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Design Documentation</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Component usage guidelines and UI specifications</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Web structure patterns and desktop layout parameters</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Accessibility guidelines and best practices</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Design annotations and implementation notes for developers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Team Leadership & Collaboration</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-amber-600 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Task Organization</h4>
                <p className="text-sm text-gray-600">
                  Organized design tasks, timelines, and deliverables for the team. Defined clear ownership, priorities, and accountability across all project phases.
                </p>
              </div>
              <div className="border-l-4 border-amber-600 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Design Review Process</h4>
                <p className="text-sm text-gray-600">
                  Established structured design review sessions. Gathered feedback systematically and iterated designs based on stakeholder and team input.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-amber-600 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Developer Alignment</h4>
                <p className="text-sm text-gray-600">
                  Participated in collaboration meetings with web developers to communicate design intent clearly, walk through desktop layouts, and ensure accurate implementation of the UI system.
                </p>
              </div>
              <div className="border-l-4 border-amber-600 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Stakeholder Communication</h4>
                <p className="text-sm text-gray-600">
                  Facilitated regular updates and feedback sessions. Communicated design decisions, rationale, and progress transparently throughout the project timeline.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Outcomes</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Deliverables Completed</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>20+ high-fidelity desktop UI screens designed</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>Complete UI design system with components</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>Comprehensive design handoff documentation</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>Multiple stakeholder feedback iterations completed</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>Desktop web design layout specifications</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Key Learnings</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-amber-600 font-bold">→</span>
                  <span>Iterative design requires flexibility and adaptability</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-amber-600 font-bold">→</span>
                  <span>Clear design documentation prevents production misunderstandings</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-amber-600 font-bold">→</span>
                  <span>Regular cross-team communication maintains layout alignment</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-amber-600 font-bold">→</span>
                  <span>Leadership is about clarity and removing design workflow obstacles</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-amber-600 font-bold">→</span>
                  <span>Design systems create consistency at scale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Explore More Work</h3>
            <p className="text-gray-600">View additional projects and case studies.</p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold transition"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}