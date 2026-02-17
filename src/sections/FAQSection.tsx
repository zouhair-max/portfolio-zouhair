import { ArrowRight } from 'lucide-react';
import { faqs } from '@/data/content';
import { FadeInView } from '@/components/FadeInView';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  return (
    <section className="bg-bg-primary py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <FadeInView className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-text-secondary mb-4">
            • FAQ'S (08)
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </FadeInView>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <FadeInView key={index} delay={index * 0.05}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-border-custom"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline group">
                    <span className="text-lg font-medium text-white group-hover:text-text-secondary transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </FadeInView>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <FadeInView className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center border-t border-border-custom pt-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                DIDN'T FIND YOUR ANSWER?
              </h3>
            </div>
            <div className="lg:text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-white hover:text-text-secondary transition-colors"
              >
                SEND ME A MESSAGE
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="lg:text-right">
              <p className="text-sm text-text-secondary">
                NO WORRIES — JUST REACH OUT. I'M ALWAYS HAPPY TO CLARIFY OR WALK YOU THROUGH ANYTHING.
              </p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
