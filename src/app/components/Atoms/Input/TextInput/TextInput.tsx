import React, { ChangeEvent } from "react";
import styles from "./TextInput.module.scss";

interface TextInputProps {
  label: string;
  value: string ;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({label, value, onChange, type = "text", required = true}) => {
  return (
    <div className={styles.inputGroup}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={styles.input}
      />
      <label className={styles.userLabel}>{label}</label>
    </div>
  );
};

export default TextInput;
