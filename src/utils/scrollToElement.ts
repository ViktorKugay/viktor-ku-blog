// @ts-ignore
import smoothScroll from 'smoothscroll';

export const scrollToElement = (elementId: string): void => {
  const scrollTo = document.getElementById(elementId);

  if (scrollTo) {
    smoothScroll(scrollTo);
  }
};
