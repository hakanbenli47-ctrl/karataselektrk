"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlarmCheck,
  ArrowRight,
  Bolt,
  Cable,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HomeIcon,
  Lightbulb,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plug,
  ShieldCheck,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const phoneRaw = "0531 814 70 28";
const phoneTel = "+905318147028";
const whatsappBase = "https://wa.me/905318147028";

const address = "50. Yıl Mah. 2151 Sk. No:9 Sultangazi / İstanbul";
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=50.%20Y%C4%B1l%20Mah.%202151%20Sk.%20No%3A9%20Sultangazi%20%C4%B0stanbul";

function wpLink(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const navLinks = [
  { label: "Anasayfa", href: "#" },
  { label: "Yaptığımız İşler", href: "#isler" },
  { label: "Hizmetlerimiz", href: "#hizmetler" },
  { label: "Hizmet Bölgemiz", href: "#bolgeler" },
  { label: "İletişim", href: "#iletisim" },
];

const heroImages = [
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=85",
  "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=85",
];

const works = [
  {
    title: "Elektrik Arıza Tespiti",
    img: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Elektrik Panosu Onarımı",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Kamera Sistemleri",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Aydınlatma Sistemleri",
    img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Alarm Sistemleri",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Kablo & Tesisat İşleri",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Avize Montajı",
    img: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Sigorta Kutusu Değişimi",
    img: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=1200&q=85",
  },
];

const services = [
  {
    icon: Bolt,
    title: "Elektrik Arıza Tespiti",
    desc: "Ev, iş yeri, apartman ve ticari alanlarda elektrik kesintisi, sigorta atması, kaçak akım sorunu, priz ve hat arızaları için hızlı müdahale sağlanır.",
    img: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1400",
    message:
      "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Elektrik arızası için destek almak istiyorum.",
  },
  {
    icon: Zap,
    title: "Pano Kurulumu ve Onarımı",
    desc: "Elektrik panosu düzenleme, sigorta kutusu değişimi, kaçak akım rölesi kontrolü ve güvenli pano yenileme işlemleri yapılır.",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=85",
    message:
      "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Pano kurulumu veya pano onarımı için bilgi almak istiyorum.",
  },
  {
    icon: Camera,
    title: "Kamera ve Güvenlik Sistemleri",
    desc: "Ev, ofis, mağaza, apartman ve fabrika için kamera kurulumu, kayıt cihazı bağlantısı, mobil izleme ve güvenlik altyapısı kurulur.",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=85",
    message:
      "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Kamera sistemi kurulumu için keşif ve fiyat bilgisi almak istiyorum.",
  },
  {
    icon: Lightbulb,
    title: "Aydınlatma ve Tesisat İşleri",
    desc: "İç mekan, dış mekan, bahçe, dükkan ve apartman ortak alanları için aydınlatma kurulumu, kablo çekimi ve tesisat yenileme desteği sunulur.",
    img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1400&q=85",
    message:
      "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Aydınlatma ve tesisat işi için destek almak istiyorum.",
  },
  {
    icon: AlarmCheck,
    title: "Alarm ve Diafon Sistemleri",
    desc: "Alarm sistemi, görüntülü diafon, güvenlik sensörü ve işletmelere özel koruma çözümleri için ürün seçimi ve montaj desteği verilir.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85",
    message:
      "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Alarm veya diafon sistemi için bilgi almak istiyorum.",
  },
  {
    icon: Cable,
    title: "Kablo ve Data Hatları",
    desc: "Kablo çekimi, internet-data hattı, zayıf akım uygulamaları, bağlantı düzenleme ve altyapı yenileme işleri profesyonel şekilde yapılır.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    message:
      "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Kablo ve data hattı için destek almak istiyorum.",
  },
];

const quickItems = [
  "7/24 arıza ve teknik destek",
  "Yerinde keşif ve net fiyatlandırma",
  "Ev, iş yeri, apartman ve fabrika çözümleri",
  "Temiz işçilik ve güvenli kurulum",
];

const areas = [
  "Sultangazi",
  "Gaziosmanpaşa",
  "Bayrampaşa",
  "Esenler",
  "Başakşehir",
  "Eyüpsultan",
  "Arnavutköy",
  "İstanbul Avrupa Yakası",
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#17130f]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/15 bg-[#14100c]/88 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center bg-[#f5b335] text-xl font-black text-[#17130f]">
              K
            </div>

            <div>
              <p className="text-base font-black tracking-[0.18em]">
                KARATAŞ
              </p>
              <p className="text-[11px] font-bold tracking-[0.24em] text-[#f5b335]">
                ELEKTRİK ELEKTRONİK
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-[13px] font-black uppercase tracking-[0.12em] text-white/78 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#f5b335]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-black text-[#17130f] transition hover:bg-[#f5b335]"
            >
              <Phone size={17} />
              Hemen Ara
            </a>

            <a
              href={wpLink(
                "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Hizmetleriniz hakkında bilgi almak istiyorum."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] px-5 py-3 text-sm font-black text-white transition hover:bg-[#1ebe5b]"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-white lg:hidden"
            aria-label="Menüyü aç"
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#14100c] px-5 pb-5 lg:hidden"
          >
            <div className="grid gap-1 py-3">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-sm font-black uppercase tracking-[0.12em] text-white/80"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${phoneTel}`}
                className="flex items-center justify-center gap-2 bg-white px-4 py-3 text-sm font-black text-[#17130f]"
              >
                <Phone size={17} />
                Ara
              </a>

              <a
                href={wpLink(
                  "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Hizmetleriniz hakkında bilgi almak istiyorum."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25d366] px-4 py-3 text-sm font-black text-white"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <section className="relative min-h-screen overflow-hidden bg-[#17130f] pt-20 text-white">
        <div className="absolute inset-0">
          <img
            src={heroImages[0]}
            alt="Profesyonel elektrik tesisatı"
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17130f] via-[#17130f]/72 to-[#17130f]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17130f] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 inline-flex items-center gap-2 bg-[#f5b335] px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-[#17130f]">
              <Zap size={17} />
              En yakın elektrikçi desteği
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Elektrik arızası, kamera ve tesisat işlerinde hızlı çözüm.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              Karataş Elektrik Elektronik; Sultangazi ve çevresinde elektrik
              arıza, pano, kamera sistemi, alarm, aydınlatma ve kablo tesisatı
              için yerinde keşif ve profesyonel uygulama sunar.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${phoneTel}`}
                className="group inline-flex items-center justify-center gap-2 bg-[#f5b335] px-8 py-5 text-base font-black text-[#17130f] transition hover:bg-white"
              >
                <Phone size={21} />
                Hemen Ara
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href={wpLink(
                  "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Elektrik / kamera / tesisat hizmeti için bilgi almak istiyorum."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25d366] px-8 py-5 text-base font-black text-white transition hover:bg-[#1ebe5b]"
              >
                <MessageCircle size={21} />
                WhatsApp’tan Yaz
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-sm font-bold text-white/82 sm:grid-cols-2">
              {quickItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#f5b335]" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.14 }}
            className="hidden lg:block"
          >
            <div className="grid gap-5">
              {heroImages.slice(1).map((img, index) => (
                <div
                  key={img}
                  className={`relative overflow-hidden ${
                    index === 0 ? "ml-20 h-72" : "mr-16 h-80"
                  }`}
                >
                  <img
                    src={img}
                    alt="Elektrik ve güvenlik sistemleri"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="isler" className="bg-[#f4f1ea] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b16f00]">
                Yaptığımız İşler
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.045em] text-[#17130f] sm:text-6xl">
                Elektrik, güvenlik ve tesisat uygulamalarında profesyonel destek.
              </h2>
            </div>

            <a
              href={wpLink(
                "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Yaptığınız işler hakkında bilgi almak istiyorum."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#17130f] px-6 py-4 font-black text-white transition hover:bg-[#f5b335] hover:text-[#17130f]"
            >
              Bilgi Al
              <ChevronRight size={20} />
            </a>
          </motion.div>

          <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4">
            {works.map((item, index) => (
              <motion.a
                key={item.title}
                href={wpLink(
                  `Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. ${item.title} hizmeti için bilgi almak istiyorum.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className={`group relative overflow-hidden ${
                  index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-2xl font-black tracking-[-0.02em] text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-black text-[#f5b335]">
                    Detaylı bilgi al
                    <ArrowRight size={16} />
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-[#17130f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f5b335]">
              Hizmetlerimiz
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-6xl">
              Arıza, bakım, montaj ve güvenlik sistemleri için tek noktadan
              çözüm.
            </h2>
          </div>

          <div className="grid gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const reverse = index % 2 === 1;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55 }}
                  className={`grid items-center gap-8 lg:grid-cols-2 ${
                    reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative h-[360px] overflow-hidden sm:h-[460px]">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center bg-[#f5b335] text-[#17130f]">
                      <Icon size={32} />
                    </div>
                  </div>

                  <div className="py-2">
                    <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#f5b335]">
                      0{index + 1}
                    </p>

                    <h3 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                      {service.desc}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={wpLink(service.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25d366] px-7 py-4 font-black text-white transition hover:bg-[#1ebe5b]"
                      >
                        <MessageCircle size={19} />
                        WhatsApp’tan Bilgi Al
                      </a>

                      <a
                        href={`tel:${phoneTel}`}
                        className="inline-flex items-center justify-center gap-2 bg-white px-7 py-4 font-black text-[#17130f] transition hover:bg-[#f5b335]"
                      >
                        <Phone size={19} />
                        Hemen Ara
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative min-h-[560px] overflow-hidden bg-[#17130f] text-white">
        <img
          src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1800&q=85"
          alt="Elektrik teknik servis"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17130f] via-[#17130f]/78 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f5b335]">
              Neden Karataş?
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-6xl">
              Sorunu büyümeden çözen, temiz ve güvenilir işçilik.
            </h2>
          </div>

          <div className="grid gap-8 text-white/80 sm:grid-cols-2">
            {[
              {
                icon: Clock3,
                title: "Hızlı Müdahale",
                text: "Arıza, keşif ve kurulum taleplerinde hızlı geri dönüş sağlanır.",
              },
              {
                icon: ShieldCheck,
                title: "Güvenli Kurulum",
                text: "Elektrik ve güvenlik sistemleri doğru ekipmanla uygulanır.",
              },
              {
                icon: Wrench,
                title: "Temiz İşçilik",
                text: "Tesisat, pano, kamera ve montaj işlemleri düzenli yapılır.",
              },
              {
                icon: Plug,
                title: "Doğru Ürün Seçimi",
                text: "İhtiyaca uygun ürün ve sistem yapısı birlikte belirlenir.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title}>
                  <Icon className="mb-5 text-[#f5b335]" size={36} />
                  <h3 className="text-2xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="bolgeler" className="bg-[#f4f1ea] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b16f00]">
                Hizmet Bölgemiz
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#17130f] sm:text-6xl">
                Sultangazi merkezli elektrik ve güvenlik sistemi hizmeti.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5f564d]">
                Ev, apartman, mağaza, ofis ve işletmeler için elektrik arıza,
                kamera kurulumu, alarm sistemi, pano düzenleme ve tesisat
                ihtiyaçlarında hızlı iletişim kurabilirsiniz.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#17130f] px-7 py-4 font-black text-white transition hover:bg-[#f5b335] hover:text-[#17130f]"
                >
                  <Phone size={19} />
                  {phoneRaw}
                </a>

                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#f5b335] px-7 py-4 font-black text-[#17130f] transition hover:bg-white"
                >
                  <MapPin size={19} />
                  Konuma Git
                </a>
              </div>
            </div>

            <div className="relative min-h-[480px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=85"
                alt="Elektrik ve güvenlik sistemleri hizmet bölgesi"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <div className="flex flex-wrap gap-3">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="bg-white/92 px-4 py-2 text-sm font-black text-[#17130f] backdrop-blur"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="relative overflow-hidden bg-[#17130f] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=1800&q=85"
            alt="Elektrik panosu ve tesisat"
            className="h-full w-full object-cover opacity-36"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17130f] via-[#17130f]/86 to-[#17130f]/50" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f5b335]">
              İletişim
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] sm:text-6xl">
              Elektrik arızası veya sistem kurulumu için hemen ulaşın.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Kamera, elektrik tesisatı, pano, alarm, aydınlatma ve kablo
              uygulamaları için telefonla arayabilir veya WhatsApp üzerinden
              hazır mesajla destek talep edebilirsiniz.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${phoneTel}`}
                className="group flex min-h-[170px] flex-col justify-between bg-[#f5b335] p-7 text-[#17130f] transition hover:bg-white"
              >
                <Phone size={34} />
                <span className="text-3xl font-black tracking-[-0.03em]">
                  {phoneRaw}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em]">
                  Hemen ara
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </a>

              <a
                href={wpLink(
                  "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Hizmetleriniz hakkında bilgi almak istiyorum."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[170px] flex-col justify-between bg-[#25d366] p-7 text-white transition hover:bg-[#1ebe5b]"
              >
                <MessageCircle size={34} />
                <span className="text-3xl font-black tracking-[-0.03em]">
                  WhatsApp
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em]">
                  Mesaj gönder
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </a>
            </div>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-start gap-4 bg-white p-7 text-[#17130f] transition hover:bg-[#f5b335]"
            >
              <MapPin className="mt-1" size={28} />
              <span>
                <strong className="block text-xl font-black">Konuma Git</strong>
                <span className="mt-2 block leading-7 text-[#51483e]">
                  {address}
                </span>
              </span>
            </a>
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: HomeIcon,
                title: "Ev",
                text: "Priz, sigorta, aydınlatma, kamera ve arıza desteği.",
              },
              {
                icon: Plug,
                title: "İş Yeri",
                text: "Pano, kamera, alarm, data hattı ve tesisat çözümleri.",
              },
              {
                icon: AlarmCheck,
                title: "Apartman",
                text: "Ortak alan aydınlatması, diafon, güvenlik ve bakım.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-5 border-b border-white/16 pb-7">
                  <Icon className="mt-1 shrink-0 text-[#f5b335]" size={34} />
                  <div>
                    <h3 className="text-2xl font-black">{item.title}</h3>
                    <p className="mt-2 leading-7 text-white/70">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-[#100d0a] px-5 py-8 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/62 md:flex-row md:items-center md:justify-between">
          <p className="font-bold">
            © 2026 Karataş Elektrik Elektronik. Tüm hakları saklıdır.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={`tel:${phoneTel}`} className="hover:text-[#f5b335]">
              {phoneRaw}
            </a>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5b335]"
            >
              Sultangazi / İstanbul
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 sm:left-auto sm:right-6 sm:w-[390px]">
        <a
          href={`tel:${phoneTel}`}
          className="flex items-center justify-center gap-2 bg-[#17130f] px-4 py-4 text-center text-sm font-black text-white shadow-2xl shadow-black/25 transition hover:bg-[#f5b335] hover:text-[#17130f]"
        >
          <Phone size={18} />
          Ara
        </a>

        <a
          href={wpLink(
            "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Hizmetleriniz hakkında bilgi almak istiyorum."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25d366] px-4 py-4 text-center text-sm font-black text-white shadow-2xl shadow-black/25 transition hover:bg-[#1ebe5b]"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </main>
  );
}