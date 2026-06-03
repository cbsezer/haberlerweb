const designTokens = {
  colors: {
    page: '#f7f7f7',
    surface: '#ffffff',
    surfaceMuted: '#eeeeee',
    text: '#111111',
    textSoft: '#555555',
    textMuted: '#76777b',
    border: '#d7d7d7',
    brand: '#d00210',
    brandDark: '#bb000f',
    dark: '#000000',
  },
  fonts: {
    sans: 'Inter, Arial, sans-serif',
    serif: "Georgia, 'Times New Roman', serif",
  },
  categoryHeader: {
    color: '#ffffff',
    margin: 0,
    fontFamily: "Lobster, Georgia, 'Times New Roman', serif",
    fontStyle: 'italic',
    fontSize: 70,
    fontWeight: 700,
    textAlign: 'center',
  },
  categoryGradients: {
    world: 'linear-gradient(to right, #4880EC, #019CAD)',
    agenda: 'linear-gradient(to right, #970909, #d30404)',
    sports: 'linear-gradient(to right, #3c9987, #1cc9a7)',
    magazine: 'linear-gradient(to right, #b10088, #f374e8)',
  },
  sizes: {
    pageX: 'clamp(16px, 3vw, 56px)',
    gridGap: '24px',
    radius: {
      sm: '3px',
      md: '6px',
      lg: '8px',
      xl: '10px',
      pill: '999px',
    },
  },
};

export default designTokens;
