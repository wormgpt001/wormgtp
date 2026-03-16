import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Zap, Shield } from 'lucide-react';

const faqItems = [
  {
    question: 'Is this a Jailbreak of an ChatGPT model?',
    answer:
      'No, WormGPT is not a jailbreak of ChatGPT or any other existing AI model. It is a completely independent AI language model built from scratch with its own unique architecture and training methodology.',
  },
  {
    question: 'Does it support NSFW content?',
    answer:
      'WormGPT is designed without the typical restrictions found in other AI models. It can assist with a wide range of topics and content types that other models may refuse to handle.',
  },
  {
    question: 'What are the payment methods?',
    answer:
      'We currently only accept cryptocurrency payments (Bitcoin, Ethereum, and other major cryptocurrencies) to ensure maximum privacy and security for our users.',
  },
  {
    question: 'Does WormGPT record my information? How can I be safe?',
    answer:
      'WormGPT is built with privacy as a core principle. We do not store or record your conversations. All interactions are processed in real-time without persistent storage. For additional safety, we recommend using VPN services and secure communication channels.',
  },
  {
    question: 'What will I get if I pay? How do membership transactions work?',
    answer:
      'Upon payment, you will receive immediate access to WormGPT through our Telegram bot. You will get an API key or direct access credentials depending on your subscription plan. Memberships are activated instantly after payment confirmation on the blockchain.',
  },
  {
    question: 'Do you have a refund policy?',
    answer:
      'Due to the nature of digital products and cryptocurrency payments, we generally do not offer refunds. However, if you experience technical issues that we cannot resolve, we may consider refunds on a case-by-case basis.',
  },
  {
    question: 'Do you have more questions or suggestions?',
    answer:
      'Feel free to reach out to us on WhatsApp. Our support team is available 24/7 to assist you with any questions or suggestions you may have.',
  },
];

const FAQ = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-3xl font-bold text-white">Worm</span>
            <span className="text-3xl font-bold text-white/80">GPT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            FAQ
          </h1>
          <p className="text-xl text-muted-foreground">
            Here are the FAQ of our WormGPT Model.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-24">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 bg-secondary/30 data-[state=open]:bg-secondary/50"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-secondary/50 border border-border/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Lightning Fast
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  WormGPT is renowned for its lightning-fast processing
                  capabilities, allowing you to extract relevant information and
                  generate human-like responses with unparalleled speed.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-secondary/50 border border-border/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Privacy Focused
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Meet WormGPT, the ultimate AI language model designed with
                  privacy at its core. WormGPT offers unparalleled protection
                  against data breaches, ensuring that your conversations and
                  data remain private and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
