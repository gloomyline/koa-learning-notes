<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hack News</title>
  <link rel="stylesheet" href="/public/css/news.css">
</head>
<body>
  <div class="news-view view">
    {% for item in list %}
      <div class="item">
        <a href="{{ item.url }}">{{ item.title }} - {{ helper.localeTime(item.time) }}</a>
      </div>
    {% endfor %}
  </div>
</body>
</html>