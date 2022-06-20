import React from 'react';
import cls from 'classnames';
import logo from './../../assets/logo.svg';
import amex from '../../assets/payment/amex.svg';
import hz from '../../assets/payment/hz.svg';
import hz2 from '../../assets/payment/hz2.svg';
import jcb from '../../assets/payment/jcb.svg';
import master from '../../assets/payment/mc.svg';
import visa from '../../assets/payment/visa.svg';
import FOOTER_DATA from './footerData';
import useStyles from './style';

function Footer ({ children, type }){
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <div className={styles.column}>
                <div className={styles.title}>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <p>Pet Hemp Company © 2020 </p>
                    <div>
                        <img src={amex} alt="" />
                        <img src={hz} alt="" />
                        <img src={hz2} alt="" />
                        <img src={jcb} alt="" />
                        <img src={master} alt="" />
                        <img src={visa} alt="" />
                    </div>
                    <div className={cls(styles.item, styles.article)}>
                        Pet Hemp Company offers the most trusted and highest quality pet CBD
                        products. Pet Hemp Company provides the highest quality ingredients,
                        balance and consistent dosage, lab test results and great reviews for
                        their products.
                    </div>

                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.title}>Contacts</div>
                {FOOTER_DATA.contacts.map((item) => (
                    <div className={styles.item}  key={item}>{item}</div>
                ))}
            </div>
            <div className={styles.column}>
                <div className={styles.title}>Product</div>
                {FOOTER_DATA.products.map((item) => (
                    <div className={styles.item} key={item}>{item}</div>
                ))}
            </div>
            <div className={styles.column}>
                <div className={styles.title}>Policy</div>
                {FOOTER_DATA.policy.map((item) => (
                    <div className={styles.item}  key={item}>{item}</div>
                ))}
            </div>
        </div>
    );
}

export default Footer;