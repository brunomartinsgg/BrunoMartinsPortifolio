import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Telefone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\D/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Localização",
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-section-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Vamos Conversar?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto"
          >
            Tem um projeto em mente ou quer discutir oportunidades? Fique à vontade para entrar em contato!
          </motion.p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const card = (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-foreground font-medium text-sm">{item.value}</p>
                </motion.div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {card}
                </a>
              ) : (
                card
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity duration-200"
          >
            Enviar Email
            <ArrowUpRight className="h-5 w-5" />
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-4 mt-10"
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
