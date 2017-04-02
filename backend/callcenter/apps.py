from __future__ import unicode_literals

from django.apps import AppConfig


class CallcenterConfig(AppConfig):
    name = 'callcenter'

    def ready(self):
        import callcenter.signals
