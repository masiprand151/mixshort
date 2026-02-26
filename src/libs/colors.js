export const darkTheme = {
  mode: "dark",

  colors: {
    background: "#111827",
    surface: "#1F2937",
    card: "#1F2937",
    elevated: "#374151",

    textPrimary: "#FFFFFF",
    textSecondary: "#D1D5DB",
    textMuted: "#9CA3AF",
    textDisabled: "#6B7280",

    primary: "#6366F1",
    primaryLight: "#818CF8",
    primaryDark: "#4F46E5",
    onPrimary: "#FFFFFF",

    secondary: "#10B981",
    secondaryLight: "#34D399",
    secondaryDark: "#059669",
    onSecondary: "#FFFFFF",

    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",

    border: "#374151",
    divider: "#4B5563",

    inputBackground: "#1F2937",
    inputBorder: "#374151",
    inputFocus: "#6366F1",
    placeholder: "#9CA3AF",

    buttonPrimary: "#6366F1",
    buttonPrimaryText: "#FFFFFF",
    buttonSecondary: "#374151",
    buttonSecondaryText: "#FFFFFF",

    overlay: "rgba(0,0,0,0.6)",
    backdrop: "rgba(0,0,0,0.8)",
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },

  radius: {
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
