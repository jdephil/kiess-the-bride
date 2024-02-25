import django_filters
from django_filters.rest_framework import FilterSet

from kiess_the_bride.core.models import Guest


class GuestFilter(FilterSet):
    guest = django_filters.CharFilter(method="filter_by_name")

    def filter_by_name(self, queryset, value):
        print("sdfsdfssfs!!!", value)
        return queryset.filter(full_name=value)

    class Meta:
        model = Guest
        fields = ["full_name"]
