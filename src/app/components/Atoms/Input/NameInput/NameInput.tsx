import React, { ChangeEvent } from "react";
import styles from "./NameInput.module.scss";

interface TextInputProps {
  label: string;
  value: string ;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

const NameInput: React.FC<TextInputProps> = ({label, value, onChange, type = "text", required = true}) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.userLabel}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={styles.input}
      />
    </div>
  );
};

export default NameInput;
