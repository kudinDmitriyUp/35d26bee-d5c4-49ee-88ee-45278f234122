"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Zap, CheckCircle, Film, Users, Trophy, Star, Linkedin, Twitter, Globe, Mail, Youtube, Instagram } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="animatedAurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="CineVision"
          navItems={[
            {name: "Portfolio", id: "portfolio"},
            {name: "About", id: "about"},
            {name: "Services", id: "services"},
            {name: "Team", id: "team"},
            {name: "Contact", id: "contact"}
          ]}
          button={{text: "Get Started", href: "contact"}}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Cinematic Excellence"
          description="Award-winning video production and filmmaking services that bring your vision to life with precision and creativity"
          tag="Video Production"
          mediaItems={[
            {imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789560567-qksffi2u.jpg", imageAlt: "Professional video production studio"},
            {imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789561241-fxulsde6.jpg", imageAlt: "Film production crew working"},
            {imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789561712-08dbwor0.jpg", imageAlt: "Cinematic production equipment"},
            {imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789562495-73edes6r.jpg", imageAlt: "Video editing studio"},
            {imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789563463-4viaor4d.jpg", imageAlt: "Professional lighting setup"}
          ]}
          buttons={[
            {text: "View Portfolio", href: "portfolio"},
            {text: "Start Project", href: "contact"}
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Crafting Stories Through Motion"
          description="With over a decade of experience in video production, we specialize in creating compelling visual narratives for brands, broadcasters, and businesses. Our team combines technical expertise with creative vision."
          tag="About Us"
          bulletPoints={[
            {title: "Creative Vision", description: "Award-winning directors and cinematographers bringing your story to life", icon: Sparkles},
            {title: "Technical Excellence", description: "State-of-the-art equipment and cutting-edge production techniques", icon: Zap},
            {title: "Full Service", description: "From concept to final delivery, we handle every aspect of production", icon: CheckCircle}
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789564321-6bklj421.jpg"
          imageAlt="Professional video production team"
          imagePosition="right"
          textboxLayout="default"
          buttons={[
            {text: "Learn More", href: "#"}
          ]}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardTwo
          title="Featured Portfolio"
          description="Showcase of our recent projects across various industries and formats"
          tag="Our Work"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "CineVision",
              name: "Corporate Brand Documentary",
              price: "Featured Work",
              rating: 5,
              reviewCount: "18.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789565103-tavc3cp0.jpg",
              imageAlt: "Corporate documentary production"
            },
            {
              id: "2",
              brand: "CineVision",
              name: "Commercial Advertisement Series",
              price: "Featured Work",
              rating: 5,
              reviewCount: "24.5k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789565613-vvek7m7f.jpg",
              imageAlt: "Commercial advertisement shoot"
            },
            {
              id: "3",
              brand: "CineVision",
              name: "Documentary Feature Film",
              price: "Featured Work",
              rating: 5,
              reviewCount: "31.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789566372-ryrcjmz2.jpg",
              imageAlt: "Professional documentary production"
            }
          ]}
          buttons={[
            {text: "View All Projects", href: "#"}
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFour
          title="Our Impact"
          description="Proven results and industry recognition showcasing our excellence"
          tag="By The Numbers"
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              icon: Film,
              title: "Projects Completed",
              value: "500+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789571681-qz5gmyqs.jpg",
              imageAlt: "Production success metrics"
            },
            {
              id: "2",
              icon: Users,
              title: "Happy Clients",
              value: "150+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789572340-ozosxjv2.jpg",
              imageAlt: "Client satisfaction growth"
            },
            {
              id: "3",
              icon: Trophy,
              title: "Awards Won",
              value: "42",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789573013-o60x2gmw.jpg",
              imageAlt: "Industry awards and recognition"
            },
            {
              id: "4",
              icon: Star,
              title: "Client Rating",
              value: "4.9/5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789573801-5lwnz46g.jpg",
              imageAlt: "Client satisfaction ratings"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Creative Team"
          description="Talented filmmakers and production experts dedicated to your vision"
          tag="The Team"
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marcus Rivera",
              role: "Director & Founder",
              description: "15+ years of cinematic storytelling across commercials, documentaries, and feature films",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789566883-m51a0h3w.jpg",
              imageAlt: "Marcus Rivera",
              socialLinks: [
                {icon: Linkedin, url: "https://linkedin.com"},
                {icon: Twitter, url: "https://twitter.com"}
              ]
            },
            {
              id: "2",
              name: "Sophie Chen",
              role: "Cinematographer",
              description: "Award-winning cinematography with expertise in visual storytelling and technical execution",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789567384-7yu42e5r.jpg",
              imageAlt: "Sophie Chen",
              socialLinks: [
                {icon: Linkedin, url: "https://linkedin.com"},
                {icon: Globe, url: "https://example.com"}
              ]
            },
            {
              id: "3",
              name: "James Mitchell",
              role: "Lead Editor",
              description: "Expert in post-production and color grading with mastery of industry-standard software",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789567932-4rcrqgrh.jpg",
              imageAlt: "James Mitchell",
              socialLinks: [
                {icon: Linkedin, url: "https://linkedin.com"},
                {icon: Twitter, url: "https://twitter.com"}
              ]
            },
            {
              id: "4",
              name: "Elena Rodriguez",
              role: "Producer",
              description: "Strategic production planning and client management ensuring smooth project execution",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789568499-gxhtgiab.jpg",
              imageAlt: "Elena Rodriguez",
              socialLinks: [
                {icon: Linkedin, url: "https://linkedin.com"},
                {icon: Mail, url: "mailto:elena@cinevision.com"}
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Client Testimonials"
          description="What our clients say about working with our production team"
          tag="Success Stories"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "David Thompson",
              role: "CEO",
              company: "Global Tech Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789569215-60cb4ic2.jpg",
              imageAlt: "David Thompson testimonial"
            },
            {
              id: "2",
              name: "Jessica Wang",
              role: "Marketing Director",
              company: "Creative Brand Co",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789569938-6dlg06pk.png",
              imageAlt: "Jessica Wang testimonial"
            },
            {
              id: "3",
              name: "Robert Hayes",
              role: "Producer",
              company: "Entertainment Studios",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789570619-uo364lc0.jpg",
              imageAlt: "Robert Hayes testimonial"
            },
            {
              id: "4",
              name: "Michelle Garcia",
              role: "Brand Manager",
              company: "Luxury Brands Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789571189-krg3dayx.jpg",
              imageAlt: "Michelle Garcia testimonial"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted By Industry Leaders"
          description="Partnered with world-renowned brands and broadcasters"
          tag="Our Partners"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789574292-7b5cow4l.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789574849-qpvjqhjj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789575546-f33xuxaw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789576202-2nfuetfu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789576944-wr8vjk3h.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789577855-r9hjwo6i.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789578657-0qmne1f1.jpg"
          ]
          showCard={true}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Start Your Next Project"
          description="Get in touch with our team to discuss your video production needs and bring your vision to life"
          inputs={[
            {name: "name", type: "text", placeholder: "Your Name", required: true},
            {name: "email", type: "email", placeholder: "Your Email", required: true},
            {name: "company", type: "text", placeholder: "Company Name", required: false},
            {name: "phone", type: "tel", placeholder: "Phone Number", required: false}
          ]}
          textarea={{name: "message", placeholder: "Tell us about your project...", rows: 5, required: true}}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="CineVision"
          copyrightText="© CineVision Productions, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                {label: "Commercial Production", href: "#"},
                {label: "Documentary Filmmaking", href: "#"},
                {label: "Corporate Videos", href: "#"},
                {label: "Post-Production", href: "#"}
              ]
            },
            {
              title: "Company",
              items: [
                {label: "About Us", href: "about"},
                {label: "Portfolio", href: "portfolio"},
                {label: "Team", href: "team"},
                {label: "Careers", href: "#"}
              ]
            },
            {
              title: "Resources",
              items: [
                {label: "Blog", href: "#"},
                {label: "Case Studies", href: "#"},
                {label: "FAQ", href: "#"},
                {label: "Contact", href: "contact"}
              ]
            },
            {
              title: "Legal",
              items: [
                {label: "Privacy Policy", href: "#"},
                {label: "Terms of Service", href: "#"},
                {label: "Cookie Policy", href: "#"}
              ]
            }
          ]}
          socialLinks={[
            {icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram"},
            {icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter"},
            {icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn"},
            {icon: Youtube, href: "https://youtube.com", ariaLabel: "YouTube"}
          ]}
        />
      </div>
    </ThemeProvider>
  );
}