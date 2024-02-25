import django_filters
from django_filters.rest_framework import FilterSet

from kiess_the_bride.core.models import Guest


class GuestFilter(FilterSet):
    guest = django_filters.CharFilter(method="filter_by_name")

    def filter_by_name(self, queryset, name, value):
        print("sdfsdfssfs!!!",value)
        # if value:
        #     value = value.split(",")
        #     return queryset.filter(interests__id__in=value).distinct()
        return queryset

    class Meta:
        model = Guest
        fields = ["full_name"]
