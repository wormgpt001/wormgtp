import { Button } from '@/components/ui/button';
import { Check, Zap } from 'lucide-react';

const pricingPlans = [
  {
    name: 'V3',
    price: '$100',
    period: 'Monthly',
    description: 'Only Crypto Payments',
    features: [
      'Privacy Focused',
      'No Limits',
      'Lightning Fast',
      '24/7 Support',
      'Works On All Devices',
      'Monthly Access',
    ],
    popular: false,
  },
  {
    name: 'V3',
    price: '$200',
    period: 'Lifetime',
    description: 'Only Crypto Payments',
    features: [
      'Privacy Focused',
      'No Limits',
      'Lightning Fast',
      'Lifetime Access',
      '24/7 Support',
      'Works On All Devices',
    ],
    popular: false,
  },
  {
    name: 'V4',
    price: '$250',
    period: 'Monthly',
    description: 'Only Crypto Payments',
    features: [
      'File Upload',
      'Better Coding Performance',
      'Reasoning (DeepThink)',
      'Faster model',
      'More up-to-date information',
      'Only Crypto Payments',
      'Privacy Focused',
      'No Limits',
      '24/7 Support',
      'Works On All Devices',
    ],
    popular: false,
  },
  {
    name: 'V4',
    price: '$1000',
    period: 'Lifetime',
    description: 'Only Crypto Payments',
    features: [
      'File Upload',
      'Better Coding Performance',
      'Reasoning (DeepThink)',
      'Faster model',
      'More up-to-date information',
      'Only Crypto Payments',
      'Privacy Focused',
      'No Limits',
      'Premium Support',
      'Works On All Devices',
    ],
    popular: true,
  },
];

const Pricing = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-3xl font-bold text-white">Worm</span>
            <span className="text-3xl font-bold text-white/80">GPT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            To access our High Quality product "WormGPT", we offer you payment
            plans. More info is given below.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border card-hover flex flex-col ${
                plan.popular
                  ? 'bg-white/10 border-white/30'
                  : 'bg-secondary/50 border-border/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start space-x-2"
                  >
                    <Check className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/message/WLHKPIQ2AKA5M1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contact Us & Buy
                </Button>
              </a>
            </div>
          ))}
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
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
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

export default Pricing;
