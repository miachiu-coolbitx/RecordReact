import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const divStyle = {
  display: "block",
  width: "100%",
  padding: "8px 12px",
  margin: "10px 0",
};

const red = {
  display: "block",
  marginBottom: "10px",
  color: "red",
};

export default function App() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className={classes.root}>
      <Grid container style={{ padding: "20px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12}>
            <input
              name="mail"
              type="mail"
              style={divStyle}
              ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
            />
            {errors.mail && (
              <span style={red}>This field is required</span>
            )}
          </Grid>
          <Grid item xs={12}>
            <input
              name="exampleRequired"
              style={divStyle}
              ref={register({ required: true, minLength: 4, })}
            />
            {errors.exampleRequired?.type === "required" && (
              <span style={red}>This field is required</span>
            )}
            {errors.exampleRequired?.type === "minLength" && (
              <span style={red}>Your input required to be more than 4</span>
            )}
          </Grid>
          <Grid item xs={12}>
            <select name="gender" style={divStyle} ref={register({ required: true })}>
              <option selected value=''>Select</option>
              <option value="1">male</option>
              <option value="2">female</option>
            </select>
            {errors.gender && (
              <span style={red}>This field is required</span>
            )}
          </Grid>
          <input type="submit" />
        </form>
      </Grid>
    </div>
  );
}

