'use client';

// Reusable SVG icon components for consistent sizing and theming

export function IconFactory({ children, size = 24, strokeWidth = 2, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

// Factory icon
export function IconFactoryAlt({ children, ...props }) {
  return <IconFactory {...props}>{children}</IconFactory>;
}

// Specific icons used across the site
export const Icons = {
  Building(props) {
    return (
      <IconFactory {...props}>
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </IconFactory>
    );
  },

  ShieldCheck(props) {
    return (
      <IconFactory {...props}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </IconFactory>
    );
  },

  Settings(props) {
    return (
      <IconFactory {...props}>
        <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </IconFactory>
    );
  },

  Truck(props) {
    return (
      <IconFactory {...props}>
        <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m8-1a1 1 0 01-1 1H5a1 1 0 01-1-1m14-5h2a1 1 0 011 1v3a1 1 0 01-1 1h-2M9 20a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" />
      </IconFactory>
    );
  },

  Support(props) {
    return (
      <IconFactory {...props}>
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </IconFactory>
    );
  },

  Package(props) {
    return (
      <IconFactory {...props}>
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </IconFactory>
    );
  },

  ArrowRight(props) {
    return (
      <IconFactory {...props}>
        <path d="M9 5l7 7-7 7" />
      </IconFactory>
    );
  },

  Check(props) {
    return (
      <IconFactory {...props}>
        <path d="M5 13l4 4L19 7" strokeWidth={props.strokeWidth || 2.5} />
      </IconFactory>
    );
  },

  Mail(props) {
    return (
      <IconFactory {...props}>
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </IconFactory>
    );
  },

  Phone(props) {
    return (
      <IconFactory {...props}>
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </IconFactory>
    );
  },

  Location(props) {
    return (
      <IconFactory {...props}>
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </IconFactory>
    );
  },

  ChevronDown(props) {
    return (
      <IconFactory {...props}>
        <path d="M19 9l-7 7-7-7" />
      </IconFactory>
    );
  },

  Menu(props) {
    return (
      <IconFactory {...props}>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </IconFactory>
    );
  },

  Close(props) {
    return (
      <IconFactory {...props}>
        <path d="M6 18L18 6M6 6l12 12" />
      </IconFactory>
    );
  },

  ArrowUp(props) {
    return (
      <IconFactory {...props}>
        <path d="M10 16V4M10 4L5 9M10 4L15 9" />
      </IconFactory>
    );
  },

  WhatsApp(props) {
    return (
      <IconFactory {...props} size={props.size || 24} strokeWidth={0}>
        <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </IconFactory>
    );
  },

  Wheelchair(props) {
    return (
      <IconFactory {...props} strokeWidth={0.8}>
        <circle cx="12" cy="5" r="2.5" />
        <path d="M5 22l3-9h8l3 9" />
        <path d="M8 13c0 3.3 2.7 6 6 6s6-2.7 6-6" />
        <path d="M4 13h4" />
        <path d="M16 13h4" />
      </IconFactory>
    );
  },
};

export default Icons;
