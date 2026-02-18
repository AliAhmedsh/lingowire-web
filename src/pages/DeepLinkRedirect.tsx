import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const APP_SCHEME = "lingowire";
const APP_STORE_URL = "https://apps.apple.com/app/lingowire/id000000000"; // TODO: replace with real App Store ID
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.lingowire";

type DeepLinkType = "group" | "profile" | "course" | "referral" | "conversation";

const LABELS: Record<DeepLinkType, { title: string; subtitle: string; emoji: string }> = {
  group:        { emoji: "👥", title: "Join this group on Lingowire", subtitle: "Practice languages with real people in live group sessions." },
  profile:      { emoji: "🙋", title: "View this profile on Lingowire", subtitle: "Connect and practice languages together." },
  course:       { emoji: "📚", title: "Open this course on Lingowire", subtitle: "Learn a language through structured, expert-led courses." },
  referral:     { emoji: "🎉", title: "You've been invited to Lingowire!", subtitle: "Join and start practicing languages with native speakers today." },
  conversation: { emoji: "💬", title: "Open this conversation on Lingowire", subtitle: "Continue your language practice conversation." },
};

interface Props {
  type: DeepLinkType;
}

function isAndroid() {
  return /android/i.test(navigator.userAgent);
}

export default function DeepLinkRedirect({ type }: Props) {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [launched, setLaunched] = useState(false);

  const schemeUrl = `${APP_SCHEME}://${type}/${id}${location.search}`;
  const storeUrl = isAndroid() ? PLAY_STORE_URL : APP_STORE_URL;
  const meta = LABELS[type];

  useEffect(() => {
    if (!id) return;

    // Try to open the app via custom scheme
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = schemeUrl;
    document.body.appendChild(iframe);

    // After a short delay, if the app didn't open, show the fallback UI
    const timer = setTimeout(() => {
      document.body.removeChild(iframe);
      setLaunched(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(iframe)) document.body.removeChild(iframe);
    };
  }, [id, schemeUrl]);

  const handleOpenApp = () => {
    window.location.href = schemeUrl;
    setTimeout(() => {
      window.location.href = storeUrl;
    }, 1500);
  };

  const handleGetApp = () => {
    window.location.href = storeUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4ff] to-white flex flex-col items-center justify-center px-5 py-16">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0px_20px_60px_rgba(34,57,130,0.13)] p-8 flex flex-col items-center text-center gap-6">
        {/* Logo / icon */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-2xl bg-[#223982] flex items-center justify-center text-4xl shadow-lg">
            {meta.emoji}
          </div>
          <span className="text-[13px] font-semibold tracking-widest text-[#223982] uppercase">Lingowire</span>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-[24px] font-bold text-[#1a1f3c] leading-tight">
            {meta.title}
          </h1>
          <p className="text-[15px] text-[#555e7a] leading-relaxed">
            {meta.subtitle}
          </p>
        </div>

        {/* CTA buttons */}
        <div className="w-full flex flex-col gap-3 mt-2">
          <button
            onClick={handleOpenApp}
            className="w-full rounded-xl bg-[#223982] py-4 text-[16px] font-semibold text-white shadow-md hover:bg-[#1a2d6b] transition-colors"
          >
            Open in Lingowire
          </button>
          <button
            onClick={handleGetApp}
            className="w-full rounded-xl border border-[#dde3f5] bg-white py-4 text-[16px] font-semibold text-[#223982] hover:bg-[#f0f4ff] transition-colors"
          >
            {isAndroid() ? "Get it on Google Play" : "Download on the App Store"}
          </button>
        </div>

        {/* Store badges */}
        <div className="flex items-center gap-3 mt-1 opacity-60">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#223982] underline underline-offset-2">
            App Store
          </a>
          <span className="text-[#ccc]">·</span>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#223982] underline underline-offset-2">
            Google Play
          </a>
        </div>
      </div>

      {/* Subtle note shown after auto-launch attempt */}
      {launched && (
        <p className="mt-6 text-[13px] text-[#888] text-center max-w-xs">
          If Lingowire didn't open automatically, tap <strong>Open in Lingowire</strong> above or download the app first.
        </p>
      )}
    </div>
  );
}
