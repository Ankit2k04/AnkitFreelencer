export const ContactMap = () => {
  return (
    <div className="mt-32 rounded-3xl overflow-hidden glass h-[450px] relative border border-white/5 shadow-2xl">
      <iframe
        src="https://maps.google.com/maps?q=S.P%20MUKHERJEE%20ROAD%20MURGASOL%20DILDAR%20NAGAR%20ASANSOL-03&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      ></iframe>
      
      {/* Overlay for aesthetic blending */}
      <div className="absolute inset-0 pointer-events-none border-[12px] border-zinc-950/20 rounded-3xl"></div>
    </div>
  );
};
