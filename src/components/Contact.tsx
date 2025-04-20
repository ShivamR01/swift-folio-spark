
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-text-gradient">Get in Touch</h2>
        <Card className="max-w-2xl mx-auto bg-black/40 backdrop-blur-sm border border-gray-800">
          <CardHeader>
            <CardTitle className="text-purple-400">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-black/50 border-gray-700 text-gray-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-black/50 border-gray-700 text-gray-300" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={4} 
                  className="bg-black/50 border-gray-700 text-gray-300"
                />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
