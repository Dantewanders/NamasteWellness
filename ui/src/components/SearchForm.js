import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import React, { useState, useEffect } from "react";

const SearchForm = (props) => {
  const { onValueChange } = props;

  const [value, setValue] = useState(moment());

  useEffect(() => {
    if (value && onValueChange && typeof onValueChange === "function") {
      onValueChange(value);
    }
  }, [value]);

  return (
    <div>
      <DatePicker
        label="Enter Journal Date"
        className="form"
        sx={{ marginBottom: "15px", marginTop: "10px" }}
        onChange={(val) => setValue(val)}
        value={value}
      />
    </div>
  );
};

export default SearchForm;
