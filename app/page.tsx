"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlarmCheck,
  ArrowRight,
  BadgeCheck,
  Bolt,
  Building2,
  Cable,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Factory,
  HomeIcon,
  Lightbulb,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plug,
  ShieldCheck,
  Sparkles,
  Star,
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
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const navLinks = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Ürünler", href: "#urunler" },
  { label: "Süreç", href: "#surec" },
  { label: "İletişim", href: "#iletisim" },
];

const services = [
  {
    icon: Camera,
    title: "Kamera Sistemleri",
    desc: "Ev, ofis, iş yeri, apartman ve fabrika için güvenlik kamerası kurulumu, kayıt cihazı ve telefondan izleme ayarı.",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    message:
      "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Kamera sistemi kurulumu için ücretsiz keşif ve fiyat bilgisi almak istiyorum.",
  },
  {
    icon: Bolt,
    title: "Elektrik Tesisat İşleri",
    desc: "Yeni tesisat, arıza tespit, priz, anahtar, pano düzenleme, kablo çekimi ve elektrik bakım işleri.",
    img: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200",
    message:
      "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Elektrik tesisat işi için destek almak istiyorum.",
  },
  {
    icon: AlarmCheck,
    title: "Alarm & Güvenlik Sistemleri",
    desc: "Alarm sistemleri, güvenlik sensörleri, görüntülü diafon ve işletmelere özel güvenlik çözümleri.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    message:
      "Merhaba, alarm ve güvenlik sistemi için keşif ve fiyat bilgisi almak istiyorum.",
  },
  {
    icon: Cable,
    title: "Kablo & Tesisat Ürünleri",
    desc: "Kablo, elektrik malzemeleri, bağlantı ürünleri, montaj ve teknik uygulama desteği.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    message:
      "Merhaba, kablo ve tesisat ürünleri hakkında bilgi almak istiyorum. Montaj desteği de veriyor musunuz?",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Güvenilir Hizmet",
    text: "Kurulumdan sonra destek alabileceğiniz düzenli çalışma sistemi.",
  },
  {
    icon: Wrench,
    title: "Uzman Kadro",
    text: "Kamera, elektrik, alarm ve tesisat işlerinde tecrübeli uygulama.",
  },
  {
    icon: BadgeCheck,
    title: "Kaliteli Ürün",
    text: "İhtiyaca uygun ürün seçimi ve doğru sistem kurulumu.",
  },
  {
    icon: Clock3,
    title: "Hızlı Müdahale",
    text: "Keşif, kurulum, bakım ve arıza süreçlerinde hızlı dönüş.",
  },
];

const products = [
  {
    icon: Camera,
    title: "Kamera Sistemleri",
  },
  {
    icon: Plug,
    title: "Elektrik Malzemeleri",
  },
  {
    icon: Cable,
    title: "Kablo Ürünleri",
  },
  {
    icon: AlarmCheck,
    title: "Alarm Sistemleri",
  },
  {
    icon: Lightbulb,
    title: "Aydınlatma Sistemleri",
  },
  {
    icon: Zap,
    title: "Pano Kurulumu",
  },
];

const areas = [
  {
    icon: HomeIcon,
    title: "Ev",
  },
  {
    icon: Building2,
    title: "İş Yeri",
  },
  {
    icon: Factory,
    title: "Fabrika",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f6f7f3] text-[#10231d]">
      <section className="relative overflow-hidden px-5 pb-20 pt-5 sm:px-8 lg:px-12">
        <div className="absolute left-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute right-[-120px] top-[80px] h-[360px] w-[360px] rounded-full bg-amber-300/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[260px] w-[520px] -translate-x-1/2 rounded-full bg-teal-200/30 blur-3xl" />

        <header className="relative z-30 mx-auto max-w-7xl rounded-[1.75rem] border border-[#dfe5d8] bg-white/85 px-4 py-3 shadow-[0_18px_70px_rgba(16,35,29,0.08)] backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f3d33] to-[#1f7a65] text-xl font-black text-white shadow-lg shadow-emerald-800/20">
                K
              </div>

              <div>
                <p className="text-lg font-black tracking-[0.18em] text-[#10231d]">
                  KARATAŞ
                </p>
                <p className="text-xs font-bold tracking-[0.22em] text-amber-700">
                  ELEKTRİK ELEKTRONİK
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-bold text-[#40554d] lg:flex">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-emerald-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={`tel:${phoneTel}`}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-700/20 bg-emerald-50 px-5 py-3 text-sm font-black text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-700/35 hover:bg-emerald-100"
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
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-black text-[#10231d] shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dfe5d8] bg-white text-[#10231d] shadow-sm lg:hidden"
              aria-label="Menüyü aç"
            >
              {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 overflow-hidden rounded-3xl border border-[#dfe5d8] bg-[#f8faf5] p-3 lg:hidden"
            >
              <div className="grid gap-2">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-black text-[#40554d] transition hover:bg-white hover:text-emerald-700"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${phoneTel}`}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-700/20 bg-white px-4 py-3 text-sm font-black text-emerald-800"
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
                  className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-black text-white"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-700/15 bg-white/80 px-4 py-2 text-sm font-black text-emerald-800 shadow-sm">
              <Sparkles size={17} className="text-amber-600" />
              Kamera, elektrik ve güvenlik çözümleri
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#10231d] sm:text-6xl lg:text-7xl">
              Güvenli ve düzenli sistemler için{" "}
              <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                profesyonel çözüm.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#50645c] sm:text-xl">
              Karataş Elektrik Elektronik; kamera sistemleri, elektrik tesisatı,
              alarm sistemleri, kablo ürünleri, arıza tespit ve bakım
              hizmetlerinde yerinde keşif ve güvenilir teknik destek sunar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={wpLink(
                  "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Kamera / elektrik / alarm hizmeti için ücretsiz keşif almak istiyorum."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-7 py-4 text-base font-black text-white shadow-xl shadow-emerald-700/20 transition hover:-translate-y-1 hover:bg-emerald-500"
              >
                <MessageCircle size={21} />
                WhatsApp’tan Keşif Al
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href={`tel:${phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#d7ded2] bg-white px-7 py-4 text-base font-black text-[#10231d] shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:border-emerald-600/30"
              >
                <Phone size={20} />
                {phoneRaw}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {areas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl border border-[#dfe5d8] bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="font-black">{item.title}</p>
                      <p className="text-sm text-[#66776f]">Uygun sistem</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -left-5 top-10 z-10 hidden rounded-3xl border border-white bg-white/85 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <Star size={22} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm font-black">Ücretsiz Keşif</p>
                  <p className="text-xs text-[#66776f]">Hızlı teklif süreci</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-16 z-10 hidden rounded-3xl border border-white bg-white/85 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck size={23} />
                </div>
                <div>
                  <p className="text-sm font-black">Güvenlik Çözümleri</p>
                  <p className="text-xs text-[#66776f]">Ev, iş yeri, fabrika</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.2rem] border border-white bg-white p-3 shadow-[0_28px_90px_rgba(16,35,29,0.16)]">
              <img
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1400&q=80"
                alt="Kamera güvenlik sistemleri"
                className="h-[460px] w-full rounded-[1.7rem] object-cover sm:h-[560px]"
              />

              <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/40 bg-white/88 p-5 shadow-xl backdrop-blur-xl">
                <div className="mb-3 flex items-center gap-2 text-sm font-black text-emerald-700">
                  <CheckCircle2 size={18} />
                  Profesyonel kurulum ve teknik destek
                </div>
                <p className="text-2xl font-black leading-tight text-[#10231d]">
                  Kamera, elektrik, alarm ve tesisat işleri tek noktada.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="hizmetler" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-sm font-black uppercase tracking-[0.32em] text-emerald-700">
              Hizmetler
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-[#10231d] sm:text-5xl">
              İşletmenizin ve yaşam alanınızın güvenlik altyapısını güçlendirin.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-[2rem] border border-[#dfe5d8] bg-white shadow-[0_18px_60px_rgba(16,35,29,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(16,35,29,0.13)]"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10231d]/65 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-xl">
                      <Icon size={26} />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black text-[#10231d]">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#5e7068]">
                      {service.desc}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={wpLink(service.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-black text-white transition hover:bg-emerald-500"
                      >
                        <MessageCircle size={18} />
                        Bilgi Al
                      </a>

                      <a
                        href={`tel:${phoneTel}`}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#dfe5d8] bg-[#f8faf5] px-5 py-3 font-black text-[#10231d] transition hover:border-emerald-600/30"
                      >
                        <Phone size={18} />
                        Ara
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="rounded-[1.75rem] border border-[#dfe5d8] bg-white/85 p-6 shadow-[0_16px_50px_rgba(16,35,29,0.07)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,35,29,0.11)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-amber-50 text-emerald-700">
                  <Icon size={27} />
                </div>

                <h3 className="text-xl font-black text-[#10231d]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#63756d]">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="urunler" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#dfe5d8] bg-white shadow-[0_28px_90px_rgba(16,35,29,0.1)]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[460px] overflow-hidden bg-[#10231d] p-8 text-white sm:p-12">
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:44px_44px]" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
              <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />

              <div className="relative z-10">
                <p className="text-sm font-black uppercase tracking-[0.32em] text-amber-300">
                  Ürün & Montaj
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:text-5xl">
                  Doğru ürün, temiz montaj, güvenli kullanım.
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/75">
                  Kamera, alarm, elektrik malzemeleri, kablo ve tesisat ürünleri
                  için satış, kurulum ve teknik destek süreçleri birlikte
                  yürütülür.
                </p>

                <a
                  href={wpLink(
                    "Merhaba, Karataş Elektrik Elektronik web sitesinden yazıyorum. Ürün ve montaj hizmetleri hakkında bilgi almak istiyorum."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-7 py-4 font-black text-[#10231d] shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-300"
                >
                  Ürün ve Montaj İçin Yaz
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
              {products.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-[#e1e7dc] bg-[#f8faf5] p-5 transition hover:-translate-y-1 hover:border-emerald-600/25 hover:bg-white"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                      <Icon size={25} />
                    </div>
                    <h3 className="text-xl font-black text-[#10231d]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#64756d]">
                      Keşif, ürün seçimi, montaj ve destek.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="surec" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-emerald-700">
              Çalışma Süreci
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-[-0.03em] text-[#10231d] sm:text-5xl">
              Net, hızlı ve güven veren hizmet akışı.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "İhtiyaç Belirleme",
                text: "Kamera, elektrik, alarm veya tesisat ihtiyacı netleştirilir.",
              },
              {
                step: "02",
                title: "Keşif & Teklif",
                text: "Alan ve sistem yapısı değerlendirilir, uygun çözüm sunulur.",
              },
              {
                step: "03",
                title: "Kurulum & Destek",
                text: "Kurulum tamamlanır, kullanım ve destek süreci başlatılır.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[2rem] border border-[#dfe5d8] bg-white p-8 shadow-[0_18px_60px_rgba(16,35,29,0.08)]"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-100" />
                <p className="relative text-6xl font-black text-emerald-700/20">
                  {item.step}
                </p>
                <h3 className="relative mt-5 text-2xl font-black text-[#10231d]">
                  {item.title}
                </h3>
                <p className="relative mt-3 leading-7 text-[#63756d]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="iletisim" className="px-5 pb-28 pt-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#dfe5d8] bg-white shadow-[0_28px_90px_rgba(16,35,29,0.12)]">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12">
              <p className="text-sm font-black uppercase tracking-[0.32em] text-emerald-700">
                İletişim
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-[#10231d] sm:text-5xl">
                Kamera, elektrik veya güvenlik sistemi için hemen iletişime
                geçin.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5f7169]">
                Sultangazi ve çevresinde kamera satışı, bakım, arıza, elektrik
                tesisatı, kablosuz Wi-Fi kamera, alarm ve güvenlik sistemleri
                için hızlı destek alabilirsiniz.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href={wpLink(
                    "Merhaba, web sitenizden ulaşıyorum. Kamera / elektrik / alarm hizmetleri için fiyat ve keşif bilgisi almak istiyorum."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl bg-emerald-600 p-6 font-black text-white shadow-xl shadow-emerald-700/20 transition hover:-translate-y-1 hover:bg-emerald-500"
                >
                  <MessageCircle size={27} />
                  <span className="mt-4 block">WhatsApp’tan Yaz</span>
                  <span className="mt-2 block text-sm font-semibold text-white/80">
                    Hazır mesajla hızlı iletişim
                  </span>
                </a>

                <a
                  href={`tel:${phoneTel}`}
                  className="rounded-3xl border border-[#dfe5d8] bg-[#f8faf5] p-6 font-black text-[#10231d] transition hover:-translate-y-1 hover:border-emerald-600/30"
                >
                  <Phone size={27} />
                  <span className="mt-4 block">{phoneRaw}</span>
                  <span className="mt-2 block text-sm font-semibold text-[#65756e]">
                    Tek dokunuşla arama
                  </span>
                </a>
              </div>

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block rounded-3xl border border-[#dfe5d8] bg-[#f8faf5] p-6 transition hover:-translate-y-1 hover:border-emerald-600/30 hover:bg-white"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-emerald-700" size={23} />
                  <div>
                    <p className="font-black text-[#10231d]">Konuma Git</p>
                    <p className="mt-2 leading-7 text-[#61736b]">{address}</p>
                    <p className="mt-3 inline-flex items-center gap-2 text-sm font-black text-emerald-700">
                      Google Maps’te aç
                      <ArrowRight size={16} />
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="relative min-h-[440px]">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80"
                alt="Güvenlik sistemi ve elektronik cihazlar"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10231d]/80 via-[#10231d]/10 to-transparent lg:bg-gradient-to-l" />

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/30 bg-white/90 p-6 shadow-xl backdrop-blur-xl">
                <p className="text-2xl font-black text-[#10231d]">
                  Profesyonel çözümler, güvenilir hizmet.
                </p>
                <p className="mt-2 text-[#607269]">
                  Karataş Elektrik Elektronik
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 sm:left-auto sm:right-6 sm:w-[390px]">
        <a
          href={`tel:${phoneTel}`}
          className="flex items-center justify-center gap-2 rounded-2xl border border-white/60 bg-white/85 px-4 py-4 text-center text-sm font-black text-[#10231d] shadow-2xl shadow-slate-900/15 backdrop-blur-xl transition hover:bg-white"
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
          className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-4 text-center text-sm font-black text-white shadow-2xl shadow-emerald-700/25 transition hover:bg-emerald-500"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </main>
  );
}