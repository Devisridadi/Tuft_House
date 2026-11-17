import React, { useState } from 'react';
import { Scissors, Sparkles, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CraftsmanshipSpotlight: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Canvas & Stretched Frame',
      subtitle: 'Primary Monks Cloth Under High Tension',
      desc: 'Every project begins on heavy-duty primary tufting fabric stretched taut over our wooden studio frames. Your design is carefully mapped with millimeter precision.',
      tag: 'Tension & Alignment'
    },
    {
      num: '02',
      title: 'The Tufting Gun Injection',
      subtitle: 'Cut & Loop Pile Fiber Weaving',
      desc: 'Using electric and pneumatic tufting guns running at thousands of cycles per minute, our artisans shoot individual yarn loops through the canvas, varying fiber density for supreme softness.',
      tag: 'Yarn Architecture'
    },
    {
      num: '03',
      title: 'Latex Backing & Twill Sealing',
      subtitle: 'Flexible Non-Toxic Organic Rubber',
      desc: 'To lock each yarn fiber securely forever, we apply zero-VOC natural latex adhesive. It is then backed with secondary anti-skid woven twill cloth for floor safety.',
      tag: 'Heirloom Durability'
    },
    {
      num: '04',
      title: '3D Sculptural Hand Carving',
      subtitle: 'Shearing & Multi-Depth Beveling',
      desc: 'This is where flat tufting becomes true art. Using precision carpet clippers and angled duckbill scissors, our master carvers sculpt 3D grooves, crisp text lines, and organic contours.',
      tag: 'The Signature Touch'
    },
    {
      num: '05',
      title: 'Inspection & Studio Wax Seal',
      subtitle: 'Quality Certified in Andhra Pradesh',
      desc: 'Each creation undergoes lint extraction, fiber conditioning, and strict dimension checks before receiving its official TUFT HOUSE serial certificate and archival dust bag.',
      tag: 'Final Polish'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F7F4EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#786653] mb-3">
            <Scissors className="w-3.5 h-3.5 text-[#C49746]" />
            <span>The Studio Process</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#292720] tracking-tight mb-4">
            From Raw Yarn to Living Art
          </h2>
          <p className="text-sm sm:text-base text-[#786653] leading-relaxed">
            Unlike mass-produced factory rugs made on industrial automated looms, every TUFT HOUSE 
            creation is crafted by hand with patient human touch.
          </p>
        </div>

        {/* Process Steps Accordion / Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 border ${
                  activeStep === idx
                    ? 'bg-[#EAE4D8] border-[#B6A18A] shadow-subtle'
                    : 'bg-[#F7F4EE] border-[#B6A18A]/20 hover:bg-[#EAE4D8]/40'
                }`}
              >
                <span className={`font-serif text-xl sm:text-2xl font-semibold leading-none ${
                  activeStep === idx ? 'text-[#292720]' : 'text-[#A9A28E]'
                }`}>
                  {step.num}
                </span>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-sm sm:text-base font-semibold ${
                      activeStep === idx ? 'text-[#292720]' : 'text-[#786653]'
                    }`}>
                      {step.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F7F4EE] text-[#786653] border border-[#B6A18A]/30">
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#786653] mt-1 line-clamp-1">
                    {step.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Step Detailed Visual Card */}
          <div className="lg:col-span-7 bg-[#292720] rounded-3xl p-8 sm:p-12 text-[#EAE4D8] border border-white/10 shadow-elevated relative overflow-hidden flex flex-col justify-between min-h-[420px]">
            {/* Background Texture Graphic */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#786653]/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl sm:text-6xl font-serif text-[#B6A18A]/40 font-light">
                  {steps[activeStep].num} / 05
                </span>
                <div className="px-3 py-1 rounded-full bg-white/10 text-xs tracking-widest uppercase text-[#EAE4D8]">
                  {steps[activeStep].tag}
                </div>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F4EE] font-light mb-2">
                {steps[activeStep].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#B6A18A] uppercase tracking-wider mb-6">
                {steps[activeStep].subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#EAE4D8]/80 leading-relaxed max-w-xl font-light">
                {steps[activeStep].desc}
              </p>
            </div>

            {/* Quality Checklist Highlights */}
            <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-xs text-[#EAE4D8]/90">
                <CheckCircle2 className="w-4 h-4 text-[#C49746] shrink-0" />
                <span>Zero Machine Mimicry</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#EAE4D8]/90">
                <CheckCircle2 className="w-4 h-4 text-[#C49746] shrink-0" />
                <span>Heavy GSM Fiber Density</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#EAE4D8]/90">
                <CheckCircle2 className="w-4 h-4 text-[#C49746] shrink-0" />
                <span>Non-Toxic Natural Latex</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#EAE4D8]/90">
                <CheckCircle2 className="w-4 h-4 text-[#C49746] shrink-0" />
                <span>Crafted in Andhra Pradesh</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
