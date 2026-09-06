import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, UserCheck, HeartHandshake, CheckCircle2, HelpCircle, BookOpen, Award } from 'lucide-react';
import PublicNavbar from '../components/common/PublicNavbar';
import PublicFooter from '../components/common/PublicFooter';
import LanguageSelector from '../components/common/LanguageSelector';

const TRANSLATIONS = {
  EN: {
    heroBadge: 'About Ask Your Doctor (QLP)',
    heroTitle: 'Ask Your Doctor',
    heroTagline: 'Prepare better questions for your doctor\'s visit.',
    heroSubtext: 'A scientifically validated Question Prompt List (QPL) platform helping patients and caregivers take control of medical appointments.',
    getStarted: 'Get Started',
    logIn: 'Log In',
    whyTitle: 'Why This Matters',
    whyP1: 'After receiving a medical diagnosis, patients and caregivers are often overwhelmed. In short, fast-paced consultations, it is extremely common to forget important questions or feel unsure about what to ask.',
    whyP2: 'The Question Prompt List (QPL) platform empowers you to prepare, organize, and prioritize your questions before entering the doctor\'s office—ensuring your key concerns are addressed and improving communication with your care team.',
    howTitle: 'How It Works',
    howSubtext: 'Three simple steps to prepare for your medical consultation',
    step1Title: 'Tell us about you',
    step1Desc: 'Select your diagnosis, stage, or focus area to instantly surface the most relevant question bank.',
    step2Title: 'Build your question list',
    step2Desc: 'Browse expert-curated prompt lists, select key items, add your custom questions, and prioritize your top 3.',
    step3Title: 'Take it to your doctor',
    step3Desc: 'Download your finalized list as a PDF or view it on your mobile device during your consultation.',
    rolesTitle: 'Designed for Patients and Caregivers',
    rolesSubtext: 'Choose your entry point to start preparing questions',
    patientTitle: "I'm a Patient",
    patientDesc: 'Get a personalised list of questions to ask your specialist during your next consultation.',
    patientBadge: 'Patient Access',
    patientBtn: 'Get Started as Patient',
    caregiverTitle: "I'm a Caregiver",
    caregiverDesc: 'Support your loved one by preparing important medical questions on their behalf.',
    caregiverBadge: 'Caregiver Access',
    caregiverBtn: 'Get Started as Caregiver',
    creditsBadge: 'Academic Attribution',
    creditsTitle: 'Resource Developed By',
    creditsSubtext: 'Built on collaborative medical communication research across leading academic institutions.',
  },
  HI: {
    heroBadge: 'आस्क योर डॉक्टर (QLP) के बारे में',
    heroTitle: 'अपने डॉक्टर से पूछें',
    heroTagline: 'अपने डॉक्टर के पास जाने से पहले बेहतर प्रश्न तैयार करें।',
    heroSubtext: 'एक वैज्ञानिक रूप से सिद्ध प्रश्न सूची (QPL) प्लेटफॉर्म जो मरीजों और देखभाल करने वालों को अपनी चिकित्सा नियुक्तियों का नियंत्रण लेने में मदद करता है।',
    getStarted: 'शुरू करें',
    logIn: 'लॉग इन करें',
    whyTitle: 'यह क्यों महत्वपूर्ण है',
    whyP1: 'चिकित्सा निदान प्राप्त करने के बाद, मरीज और उनके परिजन अक्सर दबाव महसूस करते हैं। कम समय की डॉक्टर परामर्श में महत्वपूर्ण प्रश्नों को भूल जाना बहुत आम है।',
    whyP2: 'प्रश्न सूची (QPL) प्लेटफॉर्म आपको डॉक्टर के कक्ष में जाने से पहले अपने प्रश्नों को तैयार, व्यवस्थित और प्राथमिकता देने में सक्षम बनाता है।',
    howTitle: 'यह कैसे काम करता है',
    howSubtext: 'अपनी चिकित्सा परामर्श की तैयारी के लिए तीन सरल चरण',
    step1Title: 'अपने बारे में बताएं',
    step1Desc: 'सबसे प्रासंगिक प्रश्न बैंक देखने के लिए अपने निदान और चरण का चयन करें।',
    step2Title: 'अपनी प्रश्न सूची बनाएं',
    step2Desc: 'विशेषज्ञों द्वारा तैयार प्रश्नों को ब्राउज़ करें, चयन करें और अपने शीर्ष 3 प्रश्नों को प्राथमिकता दें।',
    step3Title: 'इसे अपने डॉक्टर के पास ले जाएं',
    step3Desc: 'अपनी अंतिम सूची को PDF के रूप में डाउनलोड करें या परामर्श के दौरान अपने मोबाइल पर देखें।',
    rolesTitle: 'मरीजों और देखभाल करने वालों के लिए डिज़ाइन किया गया',
    rolesSubtext: 'प्रश्न तैयार करना शुरू करने के लिए अपना प्रवेश बिंदु चुनें',
    patientTitle: 'मैं एक मरीज हूँ',
    patientDesc: 'अपनी अगली परामर्श के दौरान अपने विशेषज्ञ से पूछने के लिए प्रश्नों की व्यक्तिगत सूची प्राप्त करें।',
    patientBadge: 'मरीज पहुंच',
    patientBtn: 'मरीज के रूप में शुरू करें',
    caregiverTitle: 'मैं एक देखभालकर्ता हूँ',
    caregiverDesc: 'अपने प्रियजन की ओर से महत्वपूर्ण चिकित्सा प्रश्न तैयार करके उनकी सहायता करें।',
    caregiverBadge: 'देखभालकर्ता पहुंच',
    caregiverBtn: 'देखभालकर्ता के रूप में शुरू करें',
    creditsBadge: 'अकादमिक श्रेय',
    creditsTitle: 'संसाधन इनके द्वारा विकसित',
    creditsSubtext: 'प्रमुख अकादमिक संस्थानों के सहयोग से किए गए चिकित्सा संचार अनुसंधान पर आधारित।',
  },
  MR: {
    heroBadge: 'आस्क युअर डॉक्टर (QLP) बद्दल',
    heroTitle: 'आपल्या डॉक्टरांना विचारा',
    heroTagline: 'तुमच्या डॉक्टरांच्या भेटीपूर्वी अधिक चांगले प्रश्न तयार करा.',
    heroSubtext: 'रुग्ण आणि काळजीवाहूंना त्यांच्या वैद्यकीय भेटींचे नियोजन करण्यास मदत करणारा शास्त्रीयदृष्ट्या सिद्ध प्रश्न सूची (QPL) प्लॅटफॉर्म.',
    getStarted: 'प्रारंभ करा',
    logIn: 'लॉग इन करा',
    whyTitle: 'हे का महत्त्वाचे आहे',
    whyP1: 'निदान झाल्यानंतर रुग्ण आणि काळजीवाहू अनेकदा गोंधळात पडतात. कमी वेळेच्या डॉक्टरांच्या भेटीत महत्त्वाचे प्रश्न विसरणे अत्यंत सामान्य आहे.',
    whyP2: 'प्रश्न सूची (QPL) प्लॅटफॉर्म तुम्हाला डॉक्टरांच्या खोलीत जाण्यापूर्वी तुमचे प्रश्न तयार करण्यास, व्यवस्थापित करण्यास आणि प्राधान्य देण्यास सक्षम करतो.',
    howTitle: 'हे कसे कार्य करते',
    howSubtext: 'तुमच्या वैद्यकीय भेटीची तयारी करण्यासाठी तीन सोप्या पायऱ्या',
    step1Title: 'तुमच्याबद्दल सांगा',
    step1Desc: 'सर्वात संबंधित प्रश्न संच पाहण्यासाठी तुमचे निदान आणि टप्पा निवडा.',
    step2Title: 'तुमची प्रश्न यादी तयार करा',
    step2Desc: 'तज्ज्ञांनी तयार केलेले प्रश्न पहा, निवडा आणि तुमच्या पहिल्या ३ प्रश्नांना प्राधान्य द्या.',
    step3Title: 'ते तुमच्या डॉक्टरांकडे घेऊन जा',
    step3Desc: 'तुमची अंतिम यादी PDF म्हणून डाउनलोड करा किंवा भेटीदरम्यान तुमच्या मोबाईलवर पहा.',
    rolesTitle: 'रुग्ण आणि काळजीवाहूंसाठी डिझाइन केलेले',
    rolesSubtext: 'प्रश्न तयार करणे सुरू करण्यासाठी तुमचा प्रवेश निवडा',
    patientTitle: 'मी एक रुग्ण आहे',
    patientDesc: 'तुमच्या पुढील भेटीदरम्यान तज्ज्ञांना विचारण्यासाठी प्रश्नांची वैयक्तिक यादी मिळवा.',
    patientBadge: 'रुग्ण प्रवेश',
    patientBtn: 'रुग्ण म्हणून सुरू करा',
    caregiverTitle: 'मी एक काळजीवाहू आहे',
    caregiverDesc: 'तुमच्या प्रिय व्यक्तीच्या वतीने महत्त्वाचे वैद्यकीय प्रश्न तयार करून त्यांना मदत करा.',
    caregiverBadge: 'काळजीवाहू प्रवेश',
    caregiverBtn: 'काळजीवाहू म्हणून सुरू करा',
    creditsBadge: 'शैक्षणिक श्रेय',
    creditsTitle: 'संसाधन विकसित केले आहे',
    creditsSubtext: 'प्रमुख शैक्षणिक संस्थांमधील सहकार्यात्मक वैद्यकीय संप्रेषण संशोधनावर आधारित.',
  },
};

const CONTRIBUTORS = [
  { name: 'Dr Shweta Chawak', institution: 'IIT Hyderabad / Jindal Global University' },
  { name: 'Dr Mahati Chittem', institution: 'IIT Hyderabad' },
  { name: 'Prof Phyllis Butow', institution: 'University of Sydney' },
  { name: 'Dr Haryana Dhillon', institution: 'University of Sydney' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutPage = () => {
  const [lang, setLang] = useState('EN');
  const t = TRANSLATIONS[lang] || TRANSLATIONS.EN;

  return (
    <div className="min-h-screen bg-surface-900 text-white flex flex-col overflow-hidden">
      <PublicNavbar selectedLanguage={lang} onLanguageChange={setLang} />

      <main className="flex-1">
        {/* ─── 1. Hero Section ────────────────────────────────────────── */}
        <section aria-labelledby="hero-heading" className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary-600/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-accent-600/8 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <span className="badge badge-primary px-4 py-1.5 text-sm">
                {t.heroBadge}
              </span>
              <LanguageSelector selectedLanguage={lang} onLanguageChange={setLang} className="ml-2" />
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
            >
              {t.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto font-medium"
            >
              {t.heroTagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed"
            >
              {t.heroSubtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link to="/signup" className="btn btn-primary btn-lg group">
                {t.getStarted}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/login" className="btn btn-secondary btn-lg">
                {t.logIn}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── 2. Why This Matters Section ────────────────────────────── */}
        <section aria-labelledby="why-heading" className="py-20 bg-surface-800/40 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold gradient-text">
              {t.whyTitle}
            </h2>
            <div className="glass p-8 sm:p-10 rounded-2xl text-left space-y-4 leading-relaxed text-gray-300">
              <p>{t.whyP1}</p>
              <p>{t.whyP2}</p>
            </div>
          </div>
        </section>

        {/* ─── 3. How It Works Section ────────────────────────────────── */}
        <section aria-labelledby="how-heading" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-3">
              <h2 id="how-heading" className="text-3xl sm:text-4xl font-bold">
                {t.howTitle}
              </h2>
              <p className="text-gray-400 text-lg">{t.howSubtext}</p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { step: '01', title: t.step1Title, description: t.step1Desc, icon: HelpCircle },
                { step: '02', title: t.step2Title, description: t.step2Desc, icon: BookOpen },
                { step: '03', title: t.step3Title, description: t.step3Desc, icon: CheckCircle2 },
              ].map(({ step, title, description, icon: Icon }) => (
                <motion.div
                  key={step}
                  variants={itemVariants}
                  className="glass-hover p-8 rounded-2xl relative flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black text-primary-400">{step}</span>
                      <div className="w-12 h-12 rounded-xl bg-primary-600/20 border border-primary-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 4. For Patients & Caregivers (Role Cards) ─────────────── */}
        <section aria-labelledby="roles-heading" className="py-20 bg-surface-800/30 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 space-y-3">
              <h2 id="roles-heading" className="text-3xl sm:text-4xl font-bold">
                {t.rolesTitle}
              </h2>
              <p className="text-gray-400 text-lg">{t.rolesSubtext}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  id: 'patient',
                  title: t.patientTitle,
                  description: t.patientDesc,
                  href: '/signup?role=patient',
                  icon: UserCheck,
                  badge: t.patientBadge,
                  btnText: t.patientBtn,
                },
                {
                  id: 'caregiver',
                  title: t.caregiverTitle,
                  description: t.caregiverDesc,
                  href: '/signup?role=caregiver',
                  icon: HeartHandshake,
                  badge: t.caregiverBadge,
                  btnText: t.caregiverBtn,
                },
              ].map(({ id, title, description, href, icon: Icon, badge, btnText }) => (
                <motion.div
                  key={id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="glass p-8 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-primary-500/40 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="badge badge-primary text-xs">{badge}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                  </div>

                  <div className="pt-8">
                    <Link to={href} className="btn btn-primary w-full justify-center group">
                      {btnText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. Credits Section ──────────────────────────────────────── */}
        <section aria-labelledby="credits-heading" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-primary-400 text-sm font-semibold">
                <Award className="w-4 h-4" /> {t.creditsBadge}
              </div>
              <h2 id="credits-heading" className="text-3xl font-bold text-white">
                {t.creditsTitle}
              </h2>
              <p className="text-gray-400 text-sm">{t.creditsSubtext}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {CONTRIBUTORS.map((c) => (
                <div key={c.name} className="glass p-6 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white text-base">{c.name}</h4>
                  <p className="text-xs text-primary-400 mt-1">{c.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PublicFooter selectedLanguage={lang} onLanguageChange={setLang} />
    </div>
  );
};

export default AboutPage;
