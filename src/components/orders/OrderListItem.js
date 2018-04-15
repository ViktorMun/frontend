import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import compose from 'lodash/fp/compose'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'

const styles = {
  card: {
    maxWidth: 345,
    margin: 20,
    textAlign: "left",
    display: "inline-block"
  },
  table: {
    width: "10px",
    fontSize: "10px"
  },
  number: {
    fontSize: "10px"
  },
  media: {
    height: 100,
  },
}

class OrderCardBuyer extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes, order, product } = this.props;
    const { t } = this.props

    return (
      <div>
         <Card className={classes.card}>
           <CardMedia
            className={classes.media}
            image={order.product.photo}
            title="product name - redux"
          />
           <CardContent>
             <p className={classes.number}>
               {t('Order')} #{order.id}
             </p>
               <table>
                 <tr className={classes.table}>
                    <th>{t('Order Volume')}</th>
                    <td>{order.volume}</td>
                 </tr>
                 <tr className={classes.table}>
                    <th>{t('Comments')}</th>
                    <td>{order.comments}</td>
                 </tr>
                 <tr className={classes.table}>
                    <th>{t('Status')}</th>
                    <td>{order.status}</td>
                 </tr>
                 <tr className={classes.table}>
                    <th>{t('Ordered date')}</th>
                    <td>{order.date}</td>
                 </tr>
               </table>
           </CardContent>
           <CardActions>
             <Link to={`/orders/${order.id}`}>
               <Button size="small"   color="primary">
                 {t('SEE DETAILS')}
               </Button>
             </Link>
           </CardActions>
         </Card>
       </div>
    )
  }
}

export default compose(
  translate('orders'),
  withStyles(styles))(OrderCardBuyer);