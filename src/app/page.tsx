"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Zap, Wrench, Brain, Star, Lightbulb, Twitter, Linkedin, Globe, MessageSquare } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="gradientBars"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764851711663-tmfhgn4x.jpg"
          logoAlt="F1 Team Logo"
          brandName="F1 Racing Team"
          button={{
            text: "Contact Us",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          tag="Elite Motorsport"
          tagIcon={Zap}
          title="Introducing Our New F1 Racing Team"
          description="Pushing boundaries at the highest level of motorsport with precision engineering, strategic excellence, and world-class talent competing on the global stage."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764851712658-o91mygvo.jpg"
          imageAlt="F1 race car on track"
          buttons={[
            {
              text: "Meet The Team",
              href: "team"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          tag="Our Mission"
          title="Championship Ambition"
          description="Our newly formed F1 team brings together world-class engineers, strategists, and drivers dedicated to competing at the highest level of motorsport."
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Expert Engineering",
              description: "State-of-the-art aerodynamics and precision mechanics",
              icon: Wrench
            },
            {
              title: "Strategic Excellence",
              description: "Advanced data analytics and race strategy optimization",
              icon: Brain
            },
            {
              title: "World-Class Talent",
              description: "Top drivers and technical staff from elite motorsport programs",
              icon: Star
            },
            {
              title: "Innovation First",
              description: "Cutting-edge technology and continuous performance development",
              icon: Lightbulb
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764851719236-mrnja9d9.jpg"
          imageAlt="F1 pit crew teamwork"
          imagePosition="right"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Our Team"
          description="Meet the exceptional professionals driving our success on and off the track"
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Max Richardson",
              role: "Lead Driver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764851713840-c1dhb57x.jpg",
              imageAlt: "Lead driver portrait",
              socialLinks: [
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "2",
              name: "Elena Rossi",
              role: "Race Engineer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764851715178-rrht8jdh.jpg",
              imageAlt: "Race engineer portrait",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "3",
              name: "James Mitchell",
              role: "Chief Strategist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764851716373-cucbkszn.jpg",
              imageAlt: "Chief strategist portrait",
              socialLinks: [
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "4",
              name: "Sarah Chen",
              role: "Team Principal",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764851717249-dniyoen9.jpg",
              imageAlt: "Team principal portrait",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Globe,
                  url: "https://example.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Performance"
          description="Competitive metrics showcasing our motorsport excellence"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          metrics={[
            {
              id: "1",
              value: "24",
              description: "World Championship Titles"
            },
            {
              id: "2",
              value: "156",
              description: "Race Podium Finishes"
            },
            {
              id: "3",
              value: "89",
              description: "Grand Prix Victories"
            },
            {
              id: "4",
              value: "2025",
              description: "Current Season"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Our Competitive Edge"
          description="The elements that make our team exceptional"
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Advanced Aerodynamics",
              description: "Cutting-edge wind tunnel design and computational fluid dynamics for maximum performance",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764851718351-4ahd8n62.jpg",
              imageAlt: "F1 race track circuit"
            },
            {
              id: 2,
              title: "Data-Driven Strategy",
              description: "Real-time telemetry analysis and predictive modeling for race-winning decisions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764851719236-mrnja9d9.jpg",
              imageAlt: "F1 pit crew professional team"
            },
            {
              id: 3,
              title: "Championship Pedigree",
              description: "Proven track record of success with experienced professionals at every level",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764851720309-9t0z0x5b.jpg",
              imageAlt: "F1 championship trophy racing award"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Join Our Journey"
          description="Contact our team to learn about partnership opportunities, sponsorships, or media inquiries"
          tagIcon={MessageSquare}
          inputPlaceholder="Enter your email"
          buttonText="Send"
          termsText="We respect your privacy. Your information will only be used for official team communications."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764851711663-tmfhgn4x.jpg"
          logoAlt="F1 Team Logo"
          columns={[
            {
              items: [
                {
                  label: "Home",
                  href: "/"
                },
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Team",
                  href: "team"
                }
              ]
            },
            {
              items: [
                {
                  label: "Performance",
                  href: "metrics"
                },
                {
                  label: "Features",
                  href: "features"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "/privacy"
                },
                {
                  label: "Terms of Service",
                  href: "/terms"
                },
                {
                  label: "Media Kit",
                  href: "/media"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}