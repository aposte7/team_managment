function FormFields({ children, label, className }) {
  return (
    <div className={`${className} space-y-2`}>
      <label
        htmlFor={
          children.props?.id
            ? children.props.id
            : children.props?.formid
              ? children.props?.formid
              : ""
        }
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
export default FormFields;
