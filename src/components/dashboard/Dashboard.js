import React, { PureComponent } from "react"
import { withStyles } from "material-ui/styles"
import { Link } from "react-router-dom"
import Button from "material-ui/Button"
import Grid from "material-ui/Grid"
import Typography from "material-ui/Typography"
import Card, { CardActions, CardContent } from "material-ui/Card"
import Paper from "material-ui/Paper"

const styles = theme => ({
  card: {
    maxWidth: 345,
    minWidth: 240,
    margin: 20,
    textAlign: "center",
    alignItem: "center"
  },
  media: {
    height: 200
  },
  paper: {
    height: 200,
    minWidth: 400
  }
})

class Dashboard extends PureComponent {
  render() {
    const { classes, user } = this.props
    return (
      <Paper
        style={{
          textAlign: "center",
          display: "inline-block",
          marginTop: "40px"
        }}
      >
        <h1>Welcome User!</h1>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              My profile
            </Typography>
            <div className="photo">
              <img src="/images/profile.png" alt="" width="100" />
            </div>
          </CardContent>
          <CardActions>
            <Link to={`/profiles/1`}>
              <Button size="medium" color="primary" variant="raised">
                See your profile information
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              My products
            </Typography>
            <Typography color="textSecondary">
              You currently have: 8 products on offer
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/productform`}>
              <Button size="medium" color="primary" variant="raised">
                Add a new product
              </Button>
            </Link>
            <Link to={`/products`}>
              <Button size="medium" color="primary" variant="raised">
                See all my products
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              My orders
            </Typography>
            <Typography color="textSecondary">
              You currently have: 3 orders
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/orders`}>
              <Button size="medium" color="primary" variant="raised">
                View all orders
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Paper>
    )
  }
}

export default withStyles(styles)(Dashboard)
