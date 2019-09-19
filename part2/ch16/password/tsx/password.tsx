import React from 'react';

import generatePassword from '../ts/generate-password';
import rules from '../ts/rules';

import PasswordGenerate from './password-generate';
import PasswordInfo from './password-info';
import PasswordInput from './password-input';
import PasswordVisibility from './password-visibility';

import { RuleKeys, RuleKeysTF, ChangeEvent,
  PasswordProps as Props,
  PasswordState as State
} from './types';

class Password extends React.Component<Props, State> {
  readonly state: State = {
    strength: {},
    password: '',
    visible: false,
    ok: false
  };

  checkStrength = (event: ChangeEvent) => {
    const password = event.target.value;
    const strength: Partial<RuleKeysTF> = {};

    this.setState({ password });
    Object.keys(this.props).forEach(val => {
      const key = val as RuleKeys;
      if (this.props[key] && rules[key].pattern.test(password)) {
        strength[key] = true;
      }
    });
    this.setState({ strength }, () => {
      if(Object.keys(this.state.strength).length === Object.keys(this.props).length) {
        this.setState({ ok: true });
      }
      else {
        this.setState({ ok: false });
      }
    })
  }

  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible
    });
  }

  generate = () => {
    this.setState({
      visible: true,
      password: generatePassword()
    }, () => {
      this.checkStrength({
        target: { value: this.state.password }
      });
    });
  } 

  render() {
    const processedRules = Object.keys(this.props).map(val => {
      const key = val as RuleKeys;
      return {
        key,
        rule: rules[key],
        isCompleted: this.state.strength[key] || false
      };
    });
    const buttonClass = 'btn btn-primary'
      + (this.state.ok ? '' : ' disabled');
    
    return (
      <div className="card card-body bg-light form-group col-md-6">
        <label>Password</label>
        <PasswordInput
          name="password"
          onChange={this.checkStrength}
          value={this.state.password}
          visible={this.state.visible} />
        <PasswordVisibility
          checked={this.state.visible}
          onChange={this.toggleVisibility} />
        <PasswordInfo rules={processedRules} />
        <PasswordGenerate onClick={this.generate}>
          Generate
        </PasswordGenerate>
        <button className={buttonClass}>
          Save
        </button>
      </div>
    );
  }
}

export default Password;