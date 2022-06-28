/**
@module mixins
@submodule pagination
*/

import Mixin from '@ember/object/mixin';

var paginationController = Mixin.create({
  queryParams: ['skip'],
  skip: 0,
  limit: 20,
  actions: {
    prevPage: function () {
      var prevSkip = this.skip - this.limit;
      if (prevSkip < 0) {
        prevSkip = 0;
      }
      this.set('skip', prevSkip);
      this.transitionToRoute({
        queryParams: {
          skip: prevSkip,
        },
      });
    },
    nextPage: function () {
      var nextSkip = this.skip + this.limit;
      // if have next page
      if (this.model.length % this.limit !== 0) {
        return;
      }

      this.transitionToRoute({
        queryParams: {
          skip: nextSkip,
        },
      });
    },
  },
});

var paginationRoute = Mixin.create({
  queryParams: {
    skip: {
      refreshModel: true,
    },
  },
});

export { paginationRoute, paginationController };
