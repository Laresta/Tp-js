const Articles = {
  data() {
    let articles = JSON.parse(ALLNEWSJSON);
    return {
      articles: articles,
    };
  }
};

const newsTemplate = `<article>
			              <h3 class="title">{{ article.title }}</h3>
                    <p> {{article.description}} </p>
			              <button @click="viewdetailClick(article.description , article.title)">View detail</button>
		              </article>`;

const newsComponent = {
  props: ['article'],
  template: newsTemplate,
  methods: {
    viewdetailClick: changeCouleurPlusLogDateWithDate
  }
};

Vue.createApp(Articles).component('news', newsComponent).mount('#news');
