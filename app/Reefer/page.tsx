"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ReeferCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 py-8 transition group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition" />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-16 border-b border-gray-100">
          <div className="lg:col-span-2">
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4 font-semibold">Case Study</p>
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">REEFER</h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              A modern e-commerce platform designed to deliver engaging shopping experiences through thoughtful interface design and user-centered workflows for contemporary urban fashion.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Role</p>
              <p className="text-gray-900 font-medium">UI/UX Designer & Team Lead</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Timeline</p>
              <p className="text-gray-900 font-medium">6 Weeks</p>
              <p className="text-sm text-gray-500">March – April 2026</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Deliverables</p>
              <p className="text-gray-900 font-medium">20+ Screens, Design System</p>
            </div>
          </div>
        </div>

        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  REEFER is a modern e-commerce platform designed to connect contemporary urban fashion with younger demographics that value both aesthetics and seamless user experiences. The platform balances bold visual direction with clean, structured navigation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As a self-taught UI/UX designer promoted to Team Lead, I bridged raw cultural identity with professional e-commerce standards. I developed the complete design system, managed cross-functional workflows, and translated stakeholder requirements into an optimized user journey ready for development.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl border border-amber-200 aspect-square">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center border border-gray-300 shadow-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-700 rounded-lg"></div>
                </div>
                <p className="text-gray-700 font-semibold">E-Commerce Platform</p>
                <p className="text-gray-500 text-sm mt-2">Web Design</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-gray-100">
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">The Challenge</h2>
            <div className="bg-gray-50 rounded-xl p-8 sm:p-12 border border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-gray-900">Problem:</span> Translating stakeholder vision into a structured user experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As the sole UI/UX designer for REEFER, one of the key challenges was turning stakeholder feedback into a clear and intuitive shopping experience. The project initially lacked defined user flows and structured interface direction, requiring multiple design iterations to align usability, aesthetics, and business expectations. This cyclical process—design, review, revise, review again—was both the core challenge and the foundation of creating a cohesive system.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Design Iteration Cycle</h3>
              <p className="text-sm text-gray-600">
                Managing continuous stakeholder updates while maintaining visual consistency and professional aesthetics.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💎</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Desktop-First Architecture</h3>
              <p className="text-sm text-gray-600">
                Designing detailed e-commerce interfaces that preserve navigation hierarchy across desktop viewports.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Team Leadership</h3>
              <p className="text-sm text-gray-600">
                Directing collaboration workflows and structural documentation within tight project sprint phases.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">Design References</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              "Free & Easy",
              "HUF",
              "PLEASURES",
              "Vans",
              "RVCA",
              "Carrotsbyanwar",
              "Fucking Awesome",
              "Gnarly",
              "Spades"
            ].map((brand) => (
              <div key={brand} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-100 transition">
                <p className="text-sm font-medium text-gray-900">{brand}</p>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray-600 mt-8">
            These industry-leading brands informed the aesthetic direction, layout strategies, and visual trends. The goal was to extract premium, high-impact design principles while avoiding cluttered, flashy layouts that disrupt user conversion funnels.
          </p>
        </section>

        <section className="py-20 border-b border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">Design Process</h2>
          
          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "Discovery & Research",
                desc: "Conducted competitor profiling and mapped user expectations for consumers aged 18–35 to align cultural trends with seamless navigation mechanics."
              },
              {
                num: 2,
                title: "User Flows & Architecture",
                desc: "Structured critical touchpoints including product filtering, sizing variables, cart management, and optimized checkout flows."
              },
              {
                num: 3,
                title: "Wireframing & Prototyping",
                desc: "Produced low-fidelity outlines to test functional assumptions before defining high-fidelity UI systems."
              },
              {
                num: 4,
                title: "Visual Design & Iterations",
                desc: "Executed visual iterations matching aesthetic standards with minimal typography, resolving feedback cycles without introducing layout clutter."
              },
              {
                num: 5,
                title: "Design System Development",
                desc: "Constructed a robust atomic UI token library in Figma with reusable button states, input cards, navigation menus, and form templates."
              },
              {
                num: 6,
                title: "Documentation & Handoff",
                desc: "Generated organized interface documentation with state specifications, interactive properties, and web grid patterns for engineering alignment."
              }
            ].map((step) => (
              <div key={step.num} className="flex gap-6 sm:gap-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold flex-shrink-0 shadow-md">
                  {step.num}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 border-b border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">System Architecture</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-6">Public Pages</h3>
              <ul className="space-y-3">
                {["Landing Page", "About Page", "Shop Page", "Product Details", "Contact Page", "FAQ Page", "Terms & Conditions", "Privacy Policy"].map((page) => (
                  <li key={page} className="flex items-center gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                    {page}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-6">Member Pages</h3>
              <ul className="space-y-3">
                {["Cart Page", "Checkout", "Order Confirmation", "Order Tracking", "Order History", "User Profile", "Wishlist", "Notifications"].map((page) => (
                  <li key={page} className="flex items-center gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                    {page}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition group">
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-b border-gray-200 group-hover:from-gray-200 group-hover:to-gray-300 transition">
                <div className="text-center">
                  <p className="text-gray-500 font-medium">Product Discovery Mockup</p>
                  <p className="text-sm text-gray-400 mt-2">Upload image here</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Product Discovery Experience</h3>
                <p className="text-sm text-gray-600">
                  Clear catalog layout with comprehensive filtering tools. Product photography drives the grid with stripped-back typography, relying on visual aesthetics to influence purchasing decisions.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition group">
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-b border-gray-200 group-hover:from-gray-200 group-hover:to-gray-300 transition">
                <div className="text-center">
                  <p className="text-gray-500 font-medium">Checkout Flow Mockup</p>
                  <p className="text-sm text-gray-400 mt-2">Upload image here</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Streamlined Checkout</h3>
                <p className="text-sm text-gray-600">
                  Optimized single-page checkout with structural status nodes. Simplified flow reduces drop-off while building trust and transparency.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition group">
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-b border-gray-200 group-hover:from-gray-200 group-hover:to-gray-300 transition">
                <div className="text-center">
                  <p className="text-gray-500 font-medium">Navigation UI Mockup</p>
                  <p className="text-sm text-gray-400 mt-2">Upload image here</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Web Interface Layout</h3>
                <p className="text-sm text-gray-600">
                  Reliable desktop layouts through structured interface grids. Components preserve legibility and interaction safety across desktop viewports.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition group">
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-b border-gray-200 group-hover:from-gray-200 group-hover:to-gray-300 transition">
                <div className="text-center">
                  <p className="text-gray-500 font-medium">Components Library Mockup</p>
                  <p className="text-sm text-gray-400 mt-2">Upload image here</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Component Library</h3>
                <p className="text-sm text-gray-600">
                  Solid UI design system for uniform layout behaviors, button interaction phases, and product card variations across the platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">Design System</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-6">Color Palette</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-600 rounded-lg shadow-sm"></div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Primary</p>
                    <p className="text-sm text-gray-900 font-semibold">#B45309</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg shadow-sm"></div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Neutral</p>
                    <p className="text-sm text-gray-900 font-semibold">#111827</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg shadow-sm border border-gray-200"></div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Background</p>
                    <p className="text-sm text-gray-900 font-semibold">#F9FAFB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-6">Typography</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-2">Heading</p>
                  <p className="text-2xl font-bold text-gray-900">Inter Bold</p>
                  <p className="text-xs text-gray-500 mt-1">24px–72px</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-2">Body</p>
                  <p className="text-base text-gray-600">Inter Regular</p>
                  <p className="text-xs text-gray-500 mt-1">14px–16px</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-6">Spacing System</h3>
              <div className="space-y-3">
                {["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px"].map((size) => (
                  <div key={size} className="flex items-center gap-3">
                    <div className="w-12 bg-gray-200 h-px"></div>
                    <p className="text-xs text-gray-600 font-medium">{size}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-6">Components</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Primary Button", color: "bg-amber-600 text-white" },
                { name: "Secondary Button", color: "bg-gray-100 text-gray-900 border border-gray-200" },
                { name: "Tertiary Button", color: "bg-transparent text-gray-900 border border-gray-200" },
                { name: "Disabled Button", color: "bg-gray-200 text-gray-400" }
              ].map((btn) => (
                <div key={btn.name} className="border border-gray-200 rounded-xl p-6">
                  <button className={`w-full py-3 rounded-lg font-medium text-sm ${btn.color} transition`}>
                    Button
                  </button>
                  <p className="text-xs text-gray-600 mt-4">{btn.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">Additional Pages</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { title: "Home Page", desc: "Hero, featured collections, and brand messaging" },
              { title: "Product Details", desc: "Image gallery, sizing, reviews, and purchase flow" },
              { title: "User Profile", desc: "Account settings, order history, and preferences" },
              { title: "Order Tracking", desc: "Status updates, shipping information, and support" }
            ].map((page) => (
              <div key={page.title} className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition group">
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-b border-gray-200 group-hover:from-gray-200 group-hover:to-gray-300 transition">
                  <div className="text-center">
                    <p className="text-gray-500 font-medium text-sm">{page.title} Mockup</p>
                    <p className="text-xs text-gray-400 mt-1">Upload image here</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{page.title}</h3>
                  <p className="text-sm text-gray-600">{page.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 border-b border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">Outcomes & Impact</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Design Screens", value: "20+" },
              { label: "Components Built", value: "40+" },
              { label: "Design System Pages", value: "8+" },
              { label: "Feedback Iterations", value: "12+" }
            ].map((metric) => (
              <div key={metric.label} className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 border border-amber-200 text-center">
                <p className="text-4xl font-bold text-amber-900 mb-2">{metric.value}</p>
                <p className="text-sm font-medium text-amber-800">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-gray-900 mb-6">Deliverables</h3>
              <ul className="space-y-3">
                {[
                  "20+ high-fidelity desktop UI screens",
                  "Complete UI design system with components",
                  "Comprehensive design handoff documentation",
                  "Multiple stakeholder feedback iterations",
                  "Desktop web design layout specifications",
                  "Component usage guidelines and specs"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-6">Key Learnings</h3>
              <ul className="space-y-3">
                {[
                  "Iterative design requires flexibility and adaptability",
                  "Clear documentation prevents production misunderstandings",
                  "Regular communication maintains layout alignment",
                  "Leadership clarifies decisions and removes obstacles",
                  "Design systems create consistency at scale",
                  "User research informs better design decisions"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <span className="text-amber-600 font-bold mt-0.5">→</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Guidelines for UI/UX Interns</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Brand Foundation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Understand REEFER's identity: modern, visually appealing, and user-centered. Study reference brands for inspiration while avoiding cluttered, flashy layouts that disrupt conversion funnels.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Design Approach</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Start with low-fidelity wireframes before moving to high-fidelity mockups. Annotate designs clearly. Collaborate with developers to ensure accurate implementation.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {[
                    "Design wireframes, mockups, and prototypes",
                    "Conduct user research on customer behavior",
                    "Collaborate with developers for implementation",
                    "Document design decisions clearly"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1 h-1 bg-amber-600 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Workflow Tips</h3>
                <ul className="space-y-2">
                  {[
                    "Study competitor websites closely",
                    "Use design tracking tools for progress",
                    "Maintain consistent brand guidelines",
                    "Iterate based on feedback cycles"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1 h-1 bg-amber-600 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Explore More Work</h3>
            <p className="text-gray-600">View additional projects and case studies.</p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold transition whitespace-nowrap"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}