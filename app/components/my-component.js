import Component from '@glimmer/component';
import { assert } from '@ember/debug';
export default class MyComponentComponent extends Component {
  constructor() {
    super(...arguments);
    assert('test');
  }
}
