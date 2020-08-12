export const maxMobileWidth = 767;
export const maxTabletWidth = 1024;

export const checkMobile = ({ window }) => {
  return window.innerWidth <= maxMobileWidth;
};

export const checkTablet = ({ window }) => {
  return window.innerWidth > maxMobileWidth && window.innerWidth <= maxTabletWidth;
};

export const checkDesktop = ({ window }) => {
  return window.innerWidth > maxTabletWidth;
};

export const isLandscape = window => window.matchMedia('(orientation: landscape)').matches;
export const isPortrait = window => window.matchMedia('(orientation: portrait)').matches;

export const handleResize = (state, setState, window) => {
  const { isMobile, isTablet, isDesktop } = state;
  if (checkTablet({ window }) && !isTablet) {
    return setState({ isMobile: false, isTablet: true, isDesktop: false });
  }

  if (checkDesktop({ window }) && !isDesktop) {
    return setState({ isMobile: false, isTablet: false, isDesktop: true });
  }

  if (checkMobile({ window }) && !isMobile) {
    return setState({ isMobile: true, isTablet: false, isDesktop: false });
  }
};
