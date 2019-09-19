import rules from '../ts/rules';

type Rules = typeof rules;

/* Password Class Component */

export type RuleKeys = keyof Rules;
export type RuleKeysTF = {
  [K in RuleKeys]: boolean
};

export interface PasswordProps extends RuleKeysTF {}

export interface PasswordState {
  strength: Partial<RuleKeysTF>;
  password: string;
  visible: boolean;
  ok: boolean;
}

export type ChangeEvent = {
  target: {
    value: string;
  }
}

/* Function Components */

export type GenerateProps = {
  onClick: () => void;
};

export type VisibilityProps = {
  checked: boolean;
  onChange: () => void;
};

export type InfoProps = {
  rules: {
    key: RuleKeys;
    rule: Rules[keyof Rules];
    isCompleted: boolean;
  }[];
};