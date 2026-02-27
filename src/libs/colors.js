export const darkTheme = {
  mode: "dark",

  colors: {
    background: "#000000",
    surface: "#0C0F14",
    card: "#161A22",
    elevated: "#1C212B",

    textPrimary: "#FFFFFF",
    textSecondary: "#B8BDC9",
    textMuted: "#8A92A6",
    textDisabled: "#4A4F5C",

    primary: "#0d6efd",
    primaryActive: "#0a58ca",
    secondary: "#6c757d",
    onSecondary: "#a1a1a1",

    success: "#198754",
    warning: "#ffc107",
    danger: "#dc3545",
    info: "#0dcaf0",

    border: "#1E2230",
    divider: "#1A1D28",

    // ===== Input =====
    inputBackground: "#0F1117",
    inputBorder: "#1E2230",
    inputFocus: "#0d6efd",
    placeholder: "#6B7280",

    buttonPrimary: "#0d6efd",
    buttonPrimaryText: "#FFFFFF",

    buttonSecondary: "#1A1D28",
    buttonSecondaryText: "#FFFFFF",

    // ===== Overlay =====
    overlay: "rgba(0,0,0,0.7)",
    backdrop: "rgba(0,0,0,0.3)",
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },

  radius: {
    xs: 4,
    sm: 6,
    md: 12,
    lg: 20,
    xl: 28,
    full: 999,
  },

  typography: {
    h1: { fontSize: 32, fontWeight: "700" },
    h2: { fontSize: 24, fontWeight: "700" },
    h3: { fontSize: 20, fontWeight: "600" },
    body: { fontSize: 16, fontWeight: "400" },
    caption: { fontSize: 12, fontWeight: "400" },
    span: { fontSize: 10, fontWeight: "bold" },
  },

  shadow: {
    small: {
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 4,
    },
  },

  utils: {
    transparent: (color, opacity = 0.5) => hexToRgba(color, opacity),

    alpha: (colorKey, opacity = 0.5) =>
      hexToRgba(darkTheme.colors[colorKey], opacity),
  },
};

export const lightTheme = {
  ...darkTheme,
  mode: "light",
  colors: {
    ...darkTheme.colors,
    background: "#FFFFFF",
    surface: "#F9FAFB",
    card: "#FFFFFF",
    textPrimary: "#111827",
    textSecondary: "#374151",
    border: "#E5E7EB",
    divider: "#E5E7EB",
  },
};

const hexToRgba = (hex, opacity = 1) => {
  if (!hex) return hex;

  const sanitized = hex.replace("#", "");

  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
