from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
import web

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'icytranslate.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'', include('web.urls')),
)  + static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)
