import React, { ChangeEvent } from "react";
import styles from "./PhoneInput.module.scss";

interface PhoneInputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ label, value, onChange, type = "text", required = true }) => {
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

export default PhoneInput;
