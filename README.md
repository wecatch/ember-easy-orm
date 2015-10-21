# Ember-easy-orm

This Ember addon support some basic model layer for ajax request like find, create, delete and so on. When you use this addon, please remove ember-data. It also support some mixin for component to easily manage form

# Getting Started

## Install

In your ember-cli project, install this addon from npm 

```
npm install ember-easy-orm --save

```

or install the latest version from github

```
npm install https://github.com/wecatch/ember-easy-orm --save

```

## Use this addon in your ember application

In ember-cli project, create one model

```
ember g model user

```

modify model/user.js code like this


```
import model from 'ember-easy-orm/mixins/model'

export default Ember.Mixin.create(model, {
    
});

```

then in any route, you can use store service to connect to your backend server api

```

import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.find('user');
    }
});

```

# Store service  api

- find
- findOne
- save
- createRecord
- deleteRecord


# Release notes

## 0.0.2

**2015-10-21**

- fix form mixin to support component
- fix all model mixin ajax request to return promise

