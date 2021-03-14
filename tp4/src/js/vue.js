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
			              <button @click="log(article.description)">View detail</button>
		              </article>`;

const newsComponent = {
  props: ['article'],
  template: newsTemplate,
  methods: {
    log: logMessageWithDate
  }
};


Vue.createApp(Articles).component('news', newsComponent).mount('#news');
