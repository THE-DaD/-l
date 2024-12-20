import React from 'react';
import './FormPage.css';

/**
 * @component FormPage
 * @description A comprehensive initial treatment form (טופס טיפול ראשוני) component.
 *              This component renders a full-length medical evaluation form, including:
 *              - Personal details
 *              - AVPU assessment
 *              - ABCDE (Airway, Breathing, Circulation, Disability, Exposure) assessment
 *              - Fluids and medication
 *              - Caregiver and evacuation details
 *              
 * @returns {JSX.Element} The FormPage component.
 */
const FormPage = () => {
  return (
    <div className="form-page-container">
      <h1 className="form-title">טופס טיפול ראשוני</h1>

      <form className="form-wrapper">
        {/* Personal Details Section */}
        <section className="form-section">
          <h2 className="section-title">פרטים אישיים</h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="formNumber">מספר טופס</label>
              <input
                type="text"
                id="formNumber"
                placeholder="הכנס מספר טופס"
              />
            </div>
            <div className="form-group">
              <label htmlFor="personalNumber">מספר אישי/ת.ז</label>
              <input
                type="text"
                id="personalNumber"
                placeholder="הכנס מספר אישי/ת.ז"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">שם מלא</label>
              <input
                type="text"
                id="fullName"
                placeholder="הכנס שם מלא"
              />
            </div>
            <div className="form-group">
              <label>שעת פציעה/תאריך פציעה</label>
              <div className="form-subrow">
                <input
                  type="text"
                  id="injuryDate"
                  placeholder="20.12.2024"
                />
                <input
                  type="text"
                  id="injuryTime"
                  placeholder="12:30"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>מנגנון פציעה</label>
            <div className="option-list">
              {/* Replace these divs with radio buttons if data collection is needed */}
              <div className="option-pill">אב"כ</div>
              <div className="option-pill">חבלה קהה</div>
              <div className="option-pill">נפילה</div>
              <div className="option-pill">פיצוץ</div>
              <div className="option-pill">שאיפת דרכים</div>
              <div className="option-pill">הדף מסלול</div>
              <div className="option-pill">רסיסים</div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="injuryDesc">תאר את נסיבות הפציעה</label>
            <textarea
              id="injuryDesc"
              placeholder="תאר את נסיבות הפציעה"
            ></textarea>
          </div>
        </section>

        {/* AVPU Section */}
        <section className="form-section">
          <h2 className="section-title">מצב הכרה AVPU</h2>
          <div className="form-group">
            <label>מצב הכרה</label>
            <div className="option-list">
              <div className="option-pill">ערני</div>
              <div className="option-pill">מגיב לקול</div>
              <div className="option-pill">מגיב לכאב</div>
              <div className="option-pill">לא מגיב</div>
            </div>
          </div>
        </section>

        {/* ABCDE Section */}
        <section className="form-section">
          <h2 className="section-title">סכמת ABCDE</h2>

          {/* A - Airway */}
          <fieldset className="form-subsection">
            <legend>A: נתיב אוויר</legend>
            <div className="form-group">
              <label>פגיעה בנתיב אוויר?</label>
              <div className="option-list">
                <div className="option-pill">p</div>
                <div className="option-pill">לא</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="airwayAction">הכנס את הפעולה שבוצעה</label>
              <input
                type="text"
                id="airwayAction"
                placeholder="הכנס פעולה שבוצעה"
              />
            </div>
            <div className="form-group">
              <label htmlFor="airwayTime">שעת פעולה</label>
              <input
                type="text"
                id="airwayTime"
                placeholder="12:30"
              />
            </div>
            <div className="form-group">
              <label>האם הפעולה הצליחה?</label>
              <div className="option-list">
                <div className="option-pill">p</div>
                <div className="option-pill">לא</div>
              </div>
            </div>
          </fieldset>

          {/* B - Breathing */}
          <fieldset className="form-subsection">
            <legend>B: נשימה</legend>
            <div className="form-group">
              <label>פגיעה בנשימה?</label>
              <div className="option-list">
                <div className="option-pill">p</div>
                <div className="option-pill">לא</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="breathingAction">הכנס את הפעולה שבוצעה</label>
              <input
                type="text"
                id="breathingAction"
                placeholder="הכנס פעולה שבוצעה"
              />
            </div>
            <div className="form-group saturation-group">
              <label htmlFor="saturation">סטורציה</label>
              <div className="saturation-input">
                <input
                  type="text"
                  id="saturation"
                  placeholder="אחוז סטורציה"
                />
                <span>%</span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="breathingTime">שעת פעולה</label>
              <input
                type="text"
                id="breathingTime"
                placeholder="12:30"
              />
            </div>
            <div className="form-group">
              <label>האם הפעולה הצליחה?</label>
              <div className="option-list">
                <div className="option-pill">p</div>
                <div className="option-pill">לא</div>
              </div>
            </div>
          </fieldset>

          {/* C - Circulation */}
          <fieldset className="form-subsection">
            <legend>C: מחזור דם</legend>
            <div className="form-group">
              <label htmlFor="capillaryPulse">דופק קפילרי</label>
              <input
                type="text"
                id="capillaryPulse"
                placeholder="הכנס ערך"
              />
            </div>
            <div className="form-group">
              <label htmlFor="radialPulse">דופק רדיאלי</label>
              <input
                type="text"
                id="radialPulse"
                placeholder="הכנס ערך"
              />
            </div>
            <div className="form-group">
              <label>חיוור?</label>
              <div className="option-list">
                <div className="option-pill">p</div>
                <div className="option-pill">לא</div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="systolic">לחץ דם סיסטולי</label>
                <input
                  type="text"
                  id="systolic"
                  placeholder="הכנס לחץ דם סיסטולי"
                />
              </div>
              <div className="form-group">
                <label htmlFor="diastolic">לחץ דם דיאסטולי</label>
                <input
                  type="text"
                  id="diastolic"
                  placeholder="הכנס לחץ דם דיאסטולי"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="circulationTime">שעת פעולה</label>
              <input
                type="text"
                id="circulationTime"
                placeholder="12:30"
              />
            </div>
            <div className="form-group">
              <label>האם הפעולה הצליחה?</label>
              <div className="option-list">
                <div className="option-pill">p</div>
                <div className="option-pill">לא</div>
              </div>
            </div>
          </fieldset>

          {/* D - Disability (Neurological) */}
          <fieldset className="form-subsection">
            <legend>D: הערכה נוירולוגית</legend>
            <p className="instructions">
              הנחיות: בשלב זה יש לבדוק תפקוד נוירולוגי כולל מוטורי, סנסורי והתרחבות האישונים.
              סמן את החסרים הנוירולוגיים הרלוונטיים והמשך לסולם גלזגו.
            </p>
            <div className="form-group">
              <label>חסרים נוירולוגיים</label>
              <div className="option-list">
                <div className="option-pill">אישונים לא סימטריים</div>
                <div className="option-pill">חוסר מוטורי</div>
                <div className="option-pill">חוסר סנסורי</div>
              </div>
            </div>

            <h4 className="sub-title">סולם גלזגו (GCS)</h4>
            <p>עיניים</p>
            <div className="option-list">
              <div className="option-pill">אין</div>
              <div className="option-pill">לכאב</div>
              <div className="option-pill">לקול</div>
              <div className="option-pill">ספונטני</div>
            </div>

            <p>תגובה מילולית</p>
            <div className="option-list">
              <div className="option-pill">לא תגובה - 1</div>
              <div className="option-pill">קולות - 2</div>
              <div className="option-pill">מילים לא מובנות - 3</div>
              <div className="option-pill">מילים משמעותיות - 4</div>
              <div className="option-pill">מתמצא - 5</div>
            </div>

            <p>תגובה מוטורית</p>
            <div className="option-list">
              <div className="option-pill">לא תגובה - 1</div>
              <div className="option-pill">אקסטנציה - 2</div>
              <div className="option-pill">פלקסיה - 3</div>
              <div className="option-pill">נסיגה לכאב - 4</div>
              <div className="option-pill">מ Lokal - 5</div>
              <div className="option-pill">מציית - 6</div>
            </div>

            <p>כולל: GCS 0/15 ציון</p>
          </fieldset>

          {/* E - Exposure */}
          <fieldset className="form-subsection">
            <legend>E: חשיפה</legend>
            <div className="option-list">
              <div className="option-pill">קיבוע עמ"ש</div>
              <div className="option-pill">חימום אקטיבי</div>
              <div className="option-pill">הפשטה וכיסוי</div>
            </div>
          </fieldset>
        </section>

        {/* Fluids and Medications */}
        <section className="form-section">
          <h2 className="section-title">נוזלים ותרופות</h2>
          <div className="option-list">
            <div className="option-pill">נוזלים</div>
            <div className="option-pill">אנטיביוטיקה</div>
            <div className="option-pill">הדרמה וכאב</div>
            <div className="option-pill">אחר</div>
            <button type="button" className="add-med-button">הוסף תרופה +</button>
          </div>
          <input
            type="text"
            placeholder="הכנס אבחון נוסף"
            className="full-width-input"
          />
        </section>

        {/* Caregiver and Evacuation Details */}
        <section className="form-section">
          <h2 className="section-title">פרטי מטפל ופינוי</h2>
          <div className="form-group">
            <label htmlFor="medicSelect">בחר מטפל/ת</label>
            <select id="medicSelect">
              <option>בחר מטפל/ת</option>
              {/* Add more options if needed */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="evacTime">זמן פינוי</label>
            <input
              type="text"
              id="evacTime"
              placeholder="12:30"
            />
          </div>

          <div className="form-group">
            <label>סוג פינוי</label>
            <div className="option-list">
              <div className="option-pill">רכב</div>
              <div className="option-pill">מסוק</div>
              <div className="option-pill">ימי</div>
              <div className="option-pill">יבשתי</div>
            </div>
          </div>

          <div className="form-row evac-buttons">
            <button type="button" className="evac-button danger">פינוי דחוף</button>
            <button type="button" className="evac-button danger">חזרה לפעילות</button>
            <button type="button" className="evac-button danger">המתנה</button>
          </div>
        </section>

        <div className="form-actions">
          <button type="submit" className="submit-button">שמור</button>
          <button type="reset" className="reset-button">אפס</button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;

