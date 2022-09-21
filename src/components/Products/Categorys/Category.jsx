import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #E3DDBB',
    fontSize: '14px',
    marginBottom: '0',
  },
}));

const Category = () => {
  const classes = useStyles();
  return (
    <div >
      <h4 className={classes.title}>Category</h4>
    </div>
  );
}

export default Category;