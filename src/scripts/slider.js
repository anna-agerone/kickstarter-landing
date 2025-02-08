'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('.features__article');
  const backwardArrow = document.querySelector('.slider__arrows--backwards');
  const forwardArrow = document.querySelector('.slider__arrows--forward');
  const sliderNumberActive = document.querySelector('.slider__numbers--active');
  const sliderNumberTotal = document.querySelector('.slider__numbers--total');

  let currentIndex = 1;
  const totalArticles = articles.length;

  const isMobView = () => window.innerWidth < 640;

  const isTabletView = () => window.innerWidth >= 640
  && window.innerWidth < 1280;

  const updateArticles = () => {
    articles.forEach((article, index) => {
      article.style.display = 'none';
      article.classList.remove('mob-tab-item');
    });

    if (isMobView() || isTabletView()) {
      const activeArticle = articles[currentIndex - 1];

      activeArticle.style.display = 'block';
      activeArticle.classList.add('mob-tab-item');
    } else {
      articles.forEach((article) => {
        article.style.display = 'block';
      });
    }
  };

  const updateSliderNumbers = () => {
    sliderNumberActive.textContent = `0${currentIndex}`;
    sliderNumberTotal.textContent = `0${totalArticles}`;
  };

  const updateSlider = () => {
    updateArticles();
    updateSliderNumbers();
  };

  forwardArrow.addEventListener('click', () => {
    currentIndex = currentIndex < totalArticles ? currentIndex + 1 : 1;
    updateSlider();
  });

  backwardArrow.addEventListener('click', () => {
    currentIndex = currentIndex > 1 ? currentIndex - 1 : totalArticles;
    updateSlider();
  });

  window.addEventListener('resize', updateArticles);

  updateSlider();
});
