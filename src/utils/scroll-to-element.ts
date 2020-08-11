export const scrollToElement = (elementId: string): void => {
  const scrollTo = document.getElementById(elementId);
  if (scrollTo) {
    scrollTo.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
};
