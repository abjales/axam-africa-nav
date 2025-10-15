import { Mail, Phone, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* CTA Banner */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner with <span className="text-gradient">Axam Advisory</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capture Africa's transformative growth with expert guidance and local insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Website</div>
                    <a 
                      href="https://www.axamadvisory.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      www.axamadvisory.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-secondary/10">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a 
                      href="mailto:info@axamadvisory.com"
                      className="text-secondary hover:underline"
                    >
                      info@axamadvisory.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone / WhatsApp</div>
                    <div className="space-y-1">
                      <a 
                        href="tel:+254010485803"
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        +254 010 485 5803
                      </a>
                      <a 
                        href="tel:+254722276534"
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        +254 722 276534
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-muted/20 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">
                "Driving sustainable success across dynamic African markets."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border animate-slide-up" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-input border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-input border-border focus:border-primary min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
