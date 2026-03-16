import { Zap, Shield, Infinity, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'WormGPT is renowned for its lightning-fast processing capabilities, allowing you to extract relevant information and generate human-like responses with unparalleled speed.',
  },
  {
    icon: Shield,
    title: 'Privacy Focused',
    description:
      'Meet WormGPT, the ultimate AI language model designed with privacy at its core. WormGPT offers unparalleled protection against data breaches, ensuring that your conversations and data remain private and secure.',
  },
  {
    icon: Infinity,
    title: 'No Limits',
    description:
      'WormGPT is a revolutionary model of artificial intelligence designed for unlimited knowledge and limitless possibilities. Its unique blend of advanced algorithms and human-like understanding allows for continuous communication, making it a valuable resource for all kinds of research.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Meet our leading 24/7 support team for your digital companion WormGPT. With our expert support team, you can get WormGPT purchase and support. Our support team is available around the clock, giving you access to expert help whenever you need it. Whether you are an experienced hacker or just starting your dark journey, our team is always ready to help you navigate the complex world of WormGPT and its various features.',
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-secondary/50 border border-border/50 card-hover"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
