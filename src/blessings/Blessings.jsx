import React, { useState, useEffect } from 'react';
import StringDisplay from '../stringDisplay/StringDisplay';
import './Blessing.css';

const BlessingData = [
    {
        title: 'יעלללל!!!',
        content: 'מזל טוב ענקקק. מתרגשת איתך בלי סוף. שיהיה המון הצלחה וסייעתא דשמיא בבית החדש!. ושמחה, כמו שאת תמיד. יעל, אני אתגעגע :). אל תשכחי אותי גם אחרי זמן.  מזל טוב!! בנין עדי עד!! המון בריאות, ונחת. יואו יעל. פשוט הזוי שזה מתקרב ככה בצעדי ענק',
        sender: 'יהודית'
    },
    {
        title: 'יעל',
        content: '    ,. רואה אותך בלבן מול העיניים,. שומעת כבר את המנגינה. ובינתיים:,. מתפללת עליך ועל כולם,. לבית מהחלומות. ושהכל יהיה ממש - דבש.',
        sender: 'אביגיל - - - -',
    },
    {
        title: 'יעל מזל טוב',
        content: '    ,. סופרת איתך ביחד את הימים.ומאחלת את כל הטוב שבעולמים!!!',
        sender: 'אוהבת המון טובה-',
    },
    {
        title: 'יעל',
        content: ' מזל טוב ענק!.מחכה לחתונה!.בהצלחה בהכל .שיהיה לך סיעתא דשמיא גדולה.וגם בעבודה',
        sender: 'מרות',
    },
    {
        title: 'יעלוש!!',
        content: ' מזל טוב !.מחכה מאד מאד מאד לחתונה!.ומתרגשתתת .',
        sender: ' משרלי הבת דודה האוהבת',
    },
    // ניתן להוסיף כאן עוד ברכות במידת הצורך
];

const Blessings = () => {
    const [currentBlessing, setCurrentBlessing] = useState(BlessingData[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBlessing(prevBlessing => {
                const currentIndex = BlessingData.indexOf(prevBlessing);
                const nextIndex = (currentIndex + 1) % BlessingData.length;
                return BlessingData[nextIndex];
            });
        }, 10000); // 120,000 מילישניות = 2 דקות

        return () => clearInterval(interval); // נקה את ה־interval כשהקומפוננטה נעלמת
    }, []);

    return (
        <div className="blessingContainer">
            {currentBlessing && (
                <>
                    <div id="title"><StringDisplay longString={currentBlessing.title} /></div>
                    <div id="content"><StringDisplay longString={currentBlessing.content} /></div>
                    <div id="sender"><StringDisplay longString={currentBlessing.sender} /></div>
                </>
            )}
        </div>
    );
}

export default Blessings;
