export namespace GetArray {
  export class Uitsendings {
    constructor(block: 'body' | 'header' | 'main' | 'sidebar' | 'footer' | 'overlay' | 'data') {
      switch (block) {
        case 'body':
          break;
        case 'header':
          return [
            {
              shifts: 'https://teams.microsoft.com/_#/apps/42f6c1da-a241-483a-a3cc-4f5be9185951/sections/shifts',
              search: 'https://diespens.akademia.ac.za/course/search.php',
              calender: 'https://teams.microsoft.com/_#/calendarv2',
              download: 'https://teams.microsoft.com/_#/conversations/48:notes?ctx=chat',
              informationPage: 'https://docs.google.com/spreadsheets/d/1Mf6ifBflu8msVD_dAHYpmCJcu3kY_tYwueraR7ACx4M/edit#gid=499999213',
            },
            {
              akademici: 'https://tertiusroach.github.io/ateljee-admin-2023/dist/akademici.html',
              administrasie: 'https://tertiusroach.github.io/ateljee-admin-2023/dist/administrasie.html',
              operasioneel: 'https://tertiusroach.github.io/ateljee-admin-2023/dist/operasioneel.html',
            },
          ];
        case 'main':
          break;
        case 'sidebar':
          break;
        case 'footer':
          break;
        case 'overlay':
          break;
        case 'data':
          break;
      }
    }
  }

  export class Akademici {
    constructor(block: 'body' | 'header' | 'main' | 'sidebar' | 'footer' | 'overlay' | 'data') {
      switch (block) {
        case 'body':
          break;
        case 'header':
          return [
            {
              sharepoint: 'https://akademia900.sharepoint.com/sites/AAV',
              akademia: 'https://diespens.akademia.ac.za/my/',
              archive: 'https://akademia900.sharepoint.com/sites/AAV/Argief/',
              email: 'https://outlook.office.com/mail/',
              weekCalender: 'https://outlook.office.com/calendar/view/workweek',
              monthCalender: 'https://outlook.office.com/calendar/view/month',
            },
            {
              uitsendings: 'https://tertiusroach.github.io/ateljee-admin-2023/dist/uitsendings.html',
              administrasie: 'https://tertiusroach.github.io/ateljee-admin-2023/dist/administrasie.html',
              operasioneel: 'https://tertiusroach.github.io/ateljee-admin-2023/dist/operasioneel.html',
            },
          ];
        case 'main':
          return [
            //--|▼| January |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1-c2z613LomuUxPaTWotbD1O0D-VAKbiPuiU3tRLNKxs/edit#gid=518032628',
              greenLinks: 'https://docs.google.com/spreadsheets/d/1-c2z613LomuUxPaTWotbD1O0D-VAKbiPuiU3tRLNKxs/edit#gid=1558407356',

              pinkBookings: 'https://docs.google.com/spreadsheets/d/1ROcXfb8dt8LG4BO3TP2jtawhy4dNoFtxnVsGQ1Q9tdg/edit#gid=518032628',
              pinkLinks: 'https://docs.google.com/spreadsheets/d/1ROcXfb8dt8LG4BO3TP2jtawhy4dNoFtxnVsGQ1Q9tdg/edit#gid=1558407356',

              yellowBookings: 'https://docs.google.com/spreadsheets/d/1KlA_JFkR7ZURLSHHQVh5r_BTVNPcFbYoIOzBSn6yMco/edit#gid=518032628',
              yellowLinks: 'https://docs.google.com/spreadsheets/d/1KlA_JFkR7ZURLSHHQVh5r_BTVNPcFbYoIOzBSn6yMco/edit#gid=1558407356',

              orangeBookings: 'https://docs.google.com/spreadsheets/d/1Qv72R7VakXIORWic4rJObBS1MMo8D_sEB_nT-01a_4k/edit#gid=518032628',
              orangeLinks: 'https://docs.google.com/spreadsheets/d/1Qv72R7VakXIORWic4rJObBS1MMo8D_sEB_nT-01a_4k/edit#gid=1558407356',

              blueBookings: 'https://docs.google.com/spreadsheets/d/1Vvem3qutjJupEUR7VWO_4wv8ZcBBqmkWZ7diJpFA17I/edit#gid=518032628',
              blueLinks: 'https://docs.google.com/spreadsheets/d/1Vvem3qutjJupEUR7VWO_4wv8ZcBBqmkWZ7diJpFA17I/edit#gid=1558407356',
            },
            //--|▼| February |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1fketn2L0jPSqjvdoPnaYYhf52aNimxYvHO5jLlcblwE/edit#gid=518032628',
              greenLinks: 'https://docs.google.com/spreadsheets/d/1fketn2L0jPSqjvdoPnaYYhf52aNimxYvHO5jLlcblwE/edit#gid=1558407356',

              pinkBookings: 'https://docs.google.com/spreadsheets/d/1eHMN3xpuVAJAuHEss_rMJbHubkcyCOtN0CM-iK7zxT0/edit#gid=518032628',
              pinkLinks: 'https://docs.google.com/spreadsheets/d/1eHMN3xpuVAJAuHEss_rMJbHubkcyCOtN0CM-iK7zxT0/edit#gid=1558407356',

              yellowBookings: 'https://docs.google.com/spreadsheets/d/1pkoCBKnYfsoV9F3MOxo9wIBkcyhUNDCsq3srJD1CWSY/edit#gid=518032628',
              yellowLinks: 'https://docs.google.com/spreadsheets/d/1pkoCBKnYfsoV9F3MOxo9wIBkcyhUNDCsq3srJD1CWSY/edit#gid=1558407356',

              orangeBookings: 'https://docs.google.com/spreadsheets/d/1czTiDKINy7JVuWt2RMWngAXhLomeAJJWaNvXpl_Q96c/edit#gid=518032628',
              orangeLinks: 'https://docs.google.com/spreadsheets/d/1czTiDKINy7JVuWt2RMWngAXhLomeAJJWaNvXpl_Q96c/edit#gid=1558407356',

              blueBookings: 'https://docs.google.com/spreadsheets/d/1mJedIovkvIsQLWueRa_YCQuQuzChS1NTmOon1VcppUM/edit#gid=518032628',
              blueLinks: 'https://docs.google.com/spreadsheets/d/1mJedIovkvIsQLWueRa_YCQuQuzChS1NTmOon1VcppUM/edit#gid=1558407356',
            },
            //--|▼| March |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1ymQDcaBJqU6eyPSMnfqW9jApR2FI9JuwHivkD_u9JPM/edit#gid=518032628',
              greenLinks: 'https://docs.google.com/spreadsheets/d/1ymQDcaBJqU6eyPSMnfqW9jApR2FI9JuwHivkD_u9JPM/edit#gid=1558407356',

              pinkBookings: 'https://docs.google.com/spreadsheets/d/17mjOhhivvXIuZepcRD-Su2kaQ-L-47zyg6xumtMo_RM/edit#gid=518032628',
              pinkLinks: 'https://docs.google.com/spreadsheets/d/17mjOhhivvXIuZepcRD-Su2kaQ-L-47zyg6xumtMo_RM/edit#gid=1558407356',

              yellowBookings: 'https://docs.google.com/spreadsheets/d/19rpETRO6BPUaDeoXMbVlrcKKprAOmZQmo4xatlMvVPE/edit#gid=518032628',
              yellowLinks: 'https://docs.google.com/spreadsheets/d/19rpETRO6BPUaDeoXMbVlrcKKprAOmZQmo4xatlMvVPE/edit#gid=1558407356',

              orangeBookings: 'https://docs.google.com/spreadsheets/d/1EGSSlcal6rDAiqLGcMiHTkUkNZ_p0SkXFxUYfzC36Dc/edit#gid=518032628',
              orangeLinks: 'https://docs.google.com/spreadsheets/d/1EGSSlcal6rDAiqLGcMiHTkUkNZ_p0SkXFxUYfzC36Dc/edit#gid=1558407356',

              blueBookings: 'https://docs.google.com/spreadsheets/d/1lAnDOFlkiIQgX5-Tnvht25zMUW9CKMrwdlOtlQQGCTk/edit#gid=518032628',
              blueLinks: 'https://docs.google.com/spreadsheets/d/1lAnDOFlkiIQgX5-Tnvht25zMUW9CKMrwdlOtlQQGCTk/edit#gid=1558407356',
            },
            //--|▼| April |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1YKAxP9HMq12bCl_kYQj59scyHzV7p9z_bICYLqkdxys/edit#gid=518032628',
              greenLinks: 'https://docs.google.com/spreadsheets/d/1YKAxP9HMq12bCl_kYQj59scyHzV7p9z_bICYLqkdxys/edit#gid=1558407356',

              pinkBookings: 'https://docs.google.com/spreadsheets/d/1Bj4tAWJmPD1KvJGmDr9BUgzVepCCyf2qYxivyzHma_M/edit#gid=518032628',
              pinkLinks: 'https://docs.google.com/spreadsheets/d/1Bj4tAWJmPD1KvJGmDr9BUgzVepCCyf2qYxivyzHma_M/edit#gid=1558407356',

              yellowBookings: 'https://docs.google.com/spreadsheets/d/1Yu1XI4HBPuwRXQRYOhIDfTJc9jvwMgT338Ush3ALqIY/edit#gid=518032628',
              yellowLinks: 'https://docs.google.com/spreadsheets/d/1Yu1XI4HBPuwRXQRYOhIDfTJc9jvwMgT338Ush3ALqIY/edit#gid=1558407356',

              orangeBookings: 'https://docs.google.com/spreadsheets/d/1Zj9l-4ZI_izhaINSae-iKz3h-Kf297tZutC4uFJmM1o/edit#gid=518032628',
              orangeLinks: 'https://docs.google.com/spreadsheets/d/1Zj9l-4ZI_izhaINSae-iKz3h-Kf297tZutC4uFJmM1o/edit#gid=1558407356',

              blueBookings: 'https://docs.google.com/spreadsheets/d/1Q6a-5wmRg_U55BBBtGMr72Nxv2Ik2fJyfZdpJ5uasAs/edit#gid=518032628',
              blueLinks: 'https://docs.google.com/spreadsheets/d/1Q6a-5wmRg_U55BBBtGMr72Nxv2Ik2fJyfZdpJ5uasAs/edit#gid=1558407356',
            },
            //--|▼| May |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1SSFW3eawlL1WlbXFkNIidzf3Ts6nYluY9iIEwjzJTUA/edit#gid=518032628',
              greenLinks: 'https://docs.google.com/spreadsheets/d/1SSFW3eawlL1WlbXFkNIidzf3Ts6nYluY9iIEwjzJTUA/edit#gid=1558407356',

              pinkBookings: 'https://docs.google.com/spreadsheets/d/15OCKaEL9BuUmuccxWBiy_FTb0sJPHqqsxs4b70yt2QE/edit#gid=518032628',
              pinkLinks: 'https://docs.google.com/spreadsheets/d/15OCKaEL9BuUmuccxWBiy_FTb0sJPHqqsxs4b70yt2QE/edit#gid=1558407356',

              yellowBookings: 'https://docs.google.com/spreadsheets/d/1AVcon0tHd0MgXiagne1a4TXR3-tBLik-b58fLYgIe-U/edit#gid=518032628',
              yellowLinks: 'https://docs.google.com/spreadsheets/d/1AVcon0tHd0MgXiagne1a4TXR3-tBLik-b58fLYgIe-U/edit#gid=1558407356',

              orangeBookings: 'https://docs.google.com/spreadsheets/d/1RzwMWcGwYqd82tIAwA-uNBkchM3PjFtYSa5saOZmOnU/edit#gid=518032628',
              orangeLinks: 'https://docs.google.com/spreadsheets/d/1RzwMWcGwYqd82tIAwA-uNBkchM3PjFtYSa5saOZmOnU/edit#gid=1558407356',

              blueBookings: 'https://docs.google.com/spreadsheets/d/1ekpvHjnjsgst8cGGXFEByYyTp450za_BHfDe-VbZe9s/edit#gid=518032628',
              blueLinks: 'https://docs.google.com/spreadsheets/d/1ekpvHjnjsgst8cGGXFEByYyTp450za_BHfDe-VbZe9s/edit#gid=1558407356',
            },
            //--|▼| June |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1GnJDB7y8b46zOkZVCWczZpBGK_2_gsctNlG4owKf9I0/edit#gid=518032628',
              greenLinks: 'https://docs.google.com/spreadsheets/d/1GnJDB7y8b46zOkZVCWczZpBGK_2_gsctNlG4owKf9I0/edit#gid=1558407356',

              pinkBookings: 'https://docs.google.com/spreadsheets/d/15XrW3usezUz9eg5kSxWKz6vIW3zlSkmKUPdMulcKO2I/edit#gid=518032628',
              pinkLinks: 'https://docs.google.com/spreadsheets/d/15XrW3usezUz9eg5kSxWKz6vIW3zlSkmKUPdMulcKO2I/edit#gid=1558407356',

              yellowBookings: 'https://docs.google.com/spreadsheets/d/1IS9hgkrZMXSBvO5a0auynHHyiZccZaU3OkjzrJLvlZk/edit#gid=518032628',
              yellowLinks: 'https://docs.google.com/spreadsheets/d/1IS9hgkrZMXSBvO5a0auynHHyiZccZaU3OkjzrJLvlZk/edit#gid=1558407356',

              orangeBookings: 'https://docs.google.com/spreadsheets/d/1UkFlPggxDVj5cW3VWFfmdTuXA4_Iu93FNaa6pgunALg/edit#gid=518032628',
              orangeLinks: 'https://docs.google.com/spreadsheets/d/1UkFlPggxDVj5cW3VWFfmdTuXA4_Iu93FNaa6pgunALg/edit#gid=1558407356',

              blueBookings: 'https://docs.google.com/spreadsheets/d/1X7EfTRYnNa2MCS4S4iyTki_UW2gvHznOTP_OE7UeO58/edit#gid=518032628',
              blueLinks: 'https://docs.google.com/spreadsheets/d/1X7EfTRYnNa2MCS4S4iyTki_UW2gvHznOTP_OE7UeO58/edit#gid=1558407356',
            },
            //--|▼| July |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1lULKJsioPKoSltf-PvHhulRqypx8acHnVyO9pWFn9tk/edit#gid=518032628',
              greenLinks: 'https://docs.google.com/spreadsheets/d/1lULKJsioPKoSltf-PvHhulRqypx8acHnVyO9pWFn9tk/edit#gid=1558407356',

              pinkBookings: 'https://docs.google.com/spreadsheets/d/1d-4FpmWDk0p2bJnlrrBDCGlpbVQTDOxr1TT18li7WaU/edit#gid=518032628',
              pinkLinks: 'https://docs.google.com/spreadsheets/d/1d-4FpmWDk0p2bJnlrrBDCGlpbVQTDOxr1TT18li7WaU/edit#gid=1558407356',

              yellowBookings: 'https://docs.google.com/spreadsheets/d/1XeWn_cZ0HiFua0qApQgJ5t-oVy5k74bdDPiZ6Kw916g/edit#gid=518032628',
              yellowLinks: 'https://docs.google.com/spreadsheets/d/1XeWn_cZ0HiFua0qApQgJ5t-oVy5k74bdDPiZ6Kw916g/edit#gid=1558407356',

              orangeBookings: 'https://docs.google.com/spreadsheets/d/1rgEifdlB1vRy1YSF6ocqWcbkQY_HH2B01F_ARBwfG64/edit#gid=518032628',
              orangeLinks: 'https://docs.google.com/spreadsheets/d/1rgEifdlB1vRy1YSF6ocqWcbkQY_HH2B01F_ARBwfG64/edit#gid=1558407356',

              blueBookings: 'https://docs.google.com/spreadsheets/d/1WvqiwBTaSNiks9d6BHHhvAeJjQ_5ys3jBzNmnaEctKc/edit#gid=518032628',
              blueLinks: 'https://docs.google.com/spreadsheets/d/1WvqiwBTaSNiks9d6BHHhvAeJjQ_5ys3jBzNmnaEctKc/edit#gid=1558407356',
            },
            //--|▼| August |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1mTdfF2X5kbFnS41_UKHSfafVvgAYbIrz-ZfjP2bj6Mo/edit#gid=518032628',
              greenLinks: 'https://docs.google.com/spreadsheets/d/1mTdfF2X5kbFnS41_UKHSfafVvgAYbIrz-ZfjP2bj6Mo/edit#gid=1558407356',

              pinkBookings: 'https://docs.google.com/spreadsheets/d/1-WCMnr0iIevMc2N4GP3JyrfBHxgPxiRfqnfgDC4xKsk/edit#gid=518032628',
              pinkLinks: 'https://docs.google.com/spreadsheets/d/1-WCMnr0iIevMc2N4GP3JyrfBHxgPxiRfqnfgDC4xKsk/edit#gid=1558407356',

              yellowBookings: 'https://docs.google.com/spreadsheets/d/12kwG4PxBDYrMCi3FlVQupz-ErL8NFmrQhtTLXs-hOKo/edit#gid=518032628',
              yellowLinks: 'https://docs.google.com/spreadsheets/d/12kwG4PxBDYrMCi3FlVQupz-ErL8NFmrQhtTLXs-hOKo/edit#gid=1558407356',

              orangeBookings: 'https://docs.google.com/spreadsheets/d/1eeawV7G7OFi3JEZScj-9Bx_0o33MIgYg4gMHaCIuUac/edit#gid=518032628',
              orangeLinks: 'https://docs.google.com/spreadsheets/d/1eeawV7G7OFi3JEZScj-9Bx_0o33MIgYg4gMHaCIuUac/edit#gid=1558407356',

              blueBookings: 'https://docs.google.com/spreadsheets/d/1mRQoJGd3WMAAe8z9HgNoYfygSSesLbKa4OCcAWSZO0k/edit#gid=518032628',
              blueLinks: 'https://docs.google.com/spreadsheets/d/1mRQoJGd3WMAAe8z9HgNoYfygSSesLbKa4OCcAWSZO0k/edit#gid=1558407356',
            },
            //--|▼| September |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1l3LkeLGPtcZFS51Q7tKU5clTmmn5YjG2CT6_9fX8OTw/edit#gid=518032628',
              greenLinks: 'https://docs.google.com/spreadsheets/d/1l3LkeLGPtcZFS51Q7tKU5clTmmn5YjG2CT6_9fX8OTw/edit#gid=1558407356',

              pinkBookings: 'https://docs.google.com/spreadsheets/d/1C7MsPXk-BJUylTwCB2Ilxmmcgd1H-TsL3Cejbv4RjgI/edit#gid=518032628',
              pinkLinks: 'https://docs.google.com/spreadsheets/d/1C7MsPXk-BJUylTwCB2Ilxmmcgd1H-TsL3Cejbv4RjgI/edit#gid=1558407356',

              yellowBookings: 'https://docs.google.com/spreadsheets/d/147XqdImYHWrTVmXPaJPYAGIQUS_RguNNscDeTVTJCjo/edit#gid=518032628',
              yellowLinks: 'https://docs.google.com/spreadsheets/d/147XqdImYHWrTVmXPaJPYAGIQUS_RguNNscDeTVTJCjo/edit#gid=1558407356',

              orangeBookings: 'https://docs.google.com/spreadsheets/d/1s5uHQqFF8cbu4KYDpQja50V_n_t_k6S1ZOoEhNd7ggg/edit#gid=518032628',
              orangeLinks: 'https://docs.google.com/spreadsheets/d/1s5uHQqFF8cbu4KYDpQja50V_n_t_k6S1ZOoEhNd7ggg/edit#gid=1558407356',

              blueBookings: 'https://docs.google.com/spreadsheets/d/1qGjPBzdE4IF6ZfMqfh8Ug7VXN8fth2BPYduCddOueUQ/edit#gid=518032628',
              blueLinks: 'https://docs.google.com/spreadsheets/d/1qGjPBzdE4IF6ZfMqfh8Ug7VXN8fth2BPYduCddOueUQ/edit#gid=1558407356',
            },
            //--|▼| October |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/19UHXWortoK2X1V5yAmi1G44abCkHBuFMtJghLed-wQ8/edit#gid=518032628',
              greenLinks: 'https://docs.google.com/spreadsheets/d/19UHXWortoK2X1V5yAmi1G44abCkHBuFMtJghLed-wQ8/edit#gid=1558407356',

              pinkBookings: 'https://docs.google.com/spreadsheets/d/1IQNiToHU-Tygu1Jx-mScLTgSPc2OBDcVVsBUKqhH1ko/edit#gid=518032628',
              pinkLinks: 'https://docs.google.com/spreadsheets/d/1IQNiToHU-Tygu1Jx-mScLTgSPc2OBDcVVsBUKqhH1ko/edit#gid=1558407356',

              yellowBookings: 'https://docs.google.com/spreadsheets/d/1UI-aEEHvtcRdeggZk7id8eXzbzNI2j4KT2ZUdP3wu6A/edit#gid=518032628',
              yellowLinks: 'https://docs.google.com/spreadsheets/d/1UI-aEEHvtcRdeggZk7id8eXzbzNI2j4KT2ZUdP3wu6A/edit#gid=1558407356',

              orangeBookings: 'https://docs.google.com/spreadsheets/d/1tzlWARhCyo_SSTY-5lXSjYbWvVfVBPkfmd8E5iDAZCE/edit#gid=518032628',
              orangeLinks: 'https://docs.google.com/spreadsheets/d/1tzlWARhCyo_SSTY-5lXSjYbWvVfVBPkfmd8E5iDAZCE/edit#gid=1558407356',

              blueBookings: 'https://docs.google.com/spreadsheets/d/1_dmPNOAKqXdGqWAcTFM_q7C-yRVWILwqLxtOirC2xnE/edit#gid=518032628',
              blueLinks: 'https://docs.google.com/spreadsheets/d/1_dmPNOAKqXdGqWAcTFM_q7C-yRVWILwqLxtOirC2xnE/edit#gid=1558407356',
            },
            //--|▼| November |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1pW-cIryu3BM7ZwuoQED2y-1okxOUY45Chl05pAe88aU/edit#gid=518032628',
              greenLinks: 'https://docs.google.com/spreadsheets/d/1pW-cIryu3BM7ZwuoQED2y-1okxOUY45Chl05pAe88aU/edit#gid=1558407356',

              pinkBookings: 'https://docs.google.com/spreadsheets/d/17GXp-hdKZ2PAdGmYqaH2OX2XPeQKziao5oHfzaQ4E_s/edit#gid=518032628',
              pinkLinks: 'https://docs.google.com/spreadsheets/d/17GXp-hdKZ2PAdGmYqaH2OX2XPeQKziao5oHfzaQ4E_s/edit#gid=1558407356',

              yellowBookings: 'https://docs.google.com/spreadsheets/d/1_wYddiYr8O0NhU9wsaARfyMbv8prlIEit8_7jxPlcXU/edit#gid=518032628',
              yellowLinks: 'https://docs.google.com/spreadsheets/d/1_wYddiYr8O0NhU9wsaARfyMbv8prlIEit8_7jxPlcXU/edit#gid=1558407356',

              orangeBookings: 'https://docs.google.com/spreadsheets/d/1QieS2l6tYlGDO5wXWvAJ6FEPJdHqhevbPAoIHean2nw/edit#gid=518032628',
              orangeLinks: 'https://docs.google.com/spreadsheets/d/1QieS2l6tYlGDO5wXWvAJ6FEPJdHqhevbPAoIHean2nw/edit#gid=1558407356',

              blueBookings: 'https://docs.google.com/spreadsheets/d/1n0t_9Bg5y94C2F53erIAiRdlS-VWj3VbujAPZqg6KWs/edit#gid=518032628',
              blueLinks: 'https://docs.google.com/spreadsheets/d/1n0t_9Bg5y94C2F53erIAiRdlS-VWj3VbujAPZqg6KWs/edit#gid=1558407356',
            },
            //--|▼| December |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/15TemIN1c1zXBRR3_Ujgu6xf-Ck2EvEqooKQLDjyIPmM/edit#gid=518032628',
              greenLinks: 'https://docs.google.com/spreadsheets/d/15TemIN1c1zXBRR3_Ujgu6xf-Ck2EvEqooKQLDjyIPmM/edit#gid=1558407356',

              pinkBookings: 'https://docs.google.com/spreadsheets/d/1EKQql8P1wRgwJQADEP92uMHynIAi1HlWZul1OtbHebs/edit#gid=518032628',
              pinkLinks: 'https://docs.google.com/spreadsheets/d/1EKQql8P1wRgwJQADEP92uMHynIAi1HlWZul1OtbHebs/edit#gid=1558407356',

              yellowBookings: 'https://docs.google.com/spreadsheets/d/1luAWPbeprtUyXItb3c7dgn_2I5NWpCj438fuZ9xnUiw/edit#gid=518032628',
              yellowLinks: 'https://docs.google.com/spreadsheets/d/1luAWPbeprtUyXItb3c7dgn_2I5NWpCj438fuZ9xnUiw/edit#gid=1558407356',

              orangeBookings: 'https://docs.google.com/spreadsheets/d/1ANg7_pTSwXv9y9X9XECsh7G_4McMDZsNSBl8wQF4cG0/edit#gid=518032628',
              orangeLinks: 'https://docs.google.com/spreadsheets/d/1ANg7_pTSwXv9y9X9XECsh7G_4McMDZsNSBl8wQF4cG0/edit#gid=1558407356',

              blueBookings: 'https://docs.google.com/spreadsheets/d/1HdqHXBL42PyunVTePBcDg7MOfVXdqPU9_qza795wXkA/edit#gid=518032628',
              blueLinks: 'https://docs.google.com/spreadsheets/d/1HdqHXBL42PyunVTePBcDg7MOfVXdqPU9_qza795wXkA/edit#gid=1558407356',
            },
          ];
        case 'sidebar':
          return [
            {
              jan: 'https://drive.google.com/drive/u/0/folders/1hAptQVTC4zOWlMT6ziX7JQNZy7_NqUHg',
              feb: 'https://drive.google.com/drive/u/0/folders/1v3X1GDVo5nGNTjVS8MnRVLiLMb_NNatQ',
              mar: 'https://drive.google.com/drive/u/0/folders/1GITJCoy1lc3IKNhFS356102QgGZy0jFG',
              apr: 'https://drive.google.com/drive/u/0/folders/12MW2Nc7dCyigrFbiVTCE4fydje4M4t3I',
              may: 'https://drive.google.com/drive/u/0/folders/1-5iKkO-MVMEnRabpR5X8yiSx5Pgt9oyB',
              jun: 'https://drive.google.com/drive/u/0/folders/1gyx-IA2pyijwG0WCJKdWFR7XYWo72dO5',
              jul: 'https://drive.google.com/drive/u/0/folders/1WBXbKzPngxVFpQ9pIqYJ_s8MGNkwvrK8',
              aug: 'https://drive.google.com/drive/u/0/folders/1eSu52Nc1zTwUsmgGlsMQrkdB42WZQKsT',
              sep: 'https://drive.google.com/drive/u/0/folders/1tG-sb8Zf7FFgndgpiVw6TLN-tsP9S7_k',
              oct: 'https://drive.google.com/drive/u/0/folders/1sIy1JtdMxtpBX6DSO4z0eWHq7EuiT67d',
              nov: 'https://drive.google.com/drive/u/0/folders/1dvGJnPZRKdMHObDAkeFHLSZHPNhbj7iH',
              dec: 'https://drive.google.com/drive/u/0/folders/1gjFq7Gz3nchrq82NxUgoZiU2X_htOAOL',
            },
          ];
        case 'footer':
          break;
        case 'overlay':
          return [
            //--|▼| January |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1-c2z613LomuUxPaTWotbD1O0D-VAKbiPuiU3tRLNKxs/edit#gid=518032628',
              pinkBookings: 'https://docs.google.com/spreadsheets/d/1ROcXfb8dt8LG4BO3TP2jtawhy4dNoFtxnVsGQ1Q9tdg/edit#gid=518032628',
              yellowBookings: 'https://docs.google.com/spreadsheets/d/1KlA_JFkR7ZURLSHHQVh5r_BTVNPcFbYoIOzBSn6yMco/edit#gid=518032628',
              orangeBookings: 'https://docs.google.com/spreadsheets/d/1Qv72R7VakXIORWic4rJObBS1MMo8D_sEB_nT-01a_4k/edit#gid=518032628',
              blueBookings: 'https://docs.google.com/spreadsheets/d/1Vvem3qutjJupEUR7VWO_4wv8ZcBBqmkWZ7diJpFA17I/edit#gid=518032628',

              greenInformation: 'https://docs.google.com/spreadsheets/d/1-c2z613LomuUxPaTWotbD1O0D-VAKbiPuiU3tRLNKxs/edit#gid=1558407356',
              pinkInformation: 'https://docs.google.com/spreadsheets/d/1ROcXfb8dt8LG4BO3TP2jtawhy4dNoFtxnVsGQ1Q9tdg/edit#gid=1558407356',
              yellowInformation: 'https://docs.google.com/spreadsheets/d/1KlA_JFkR7ZURLSHHQVh5r_BTVNPcFbYoIOzBSn6yMco/edit#gid=1558407356',
              orangeInformation: 'https://docs.google.com/spreadsheets/d/1Qv72R7VakXIORWic4rJObBS1MMo8D_sEB_nT-01a_4k/edit#gid=1558407356',
              blueInformation: 'https://docs.google.com/spreadsheets/d/1Vvem3qutjJupEUR7VWO_4wv8ZcBBqmkWZ7diJpFA17I/edit#gid=1558407356',

              homeRecordings: 'https://docs.google.com/spreadsheets/d/1NQCIYGLw3dJtDraa_Gfb0yGwXJzPcOaWJ-7iaOtkxCU/edit#gid=849889111',
            },
            //--|▼| February |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1fketn2L0jPSqjvdoPnaYYhf52aNimxYvHO5jLlcblwE/edit#gid=518032628',
              pinkBookings: 'https://docs.google.com/spreadsheets/d/1eHMN3xpuVAJAuHEss_rMJbHubkcyCOtN0CM-iK7zxT0/edit#gid=518032628',
              yellowBookings: 'https://docs.google.com/spreadsheets/d/1pkoCBKnYfsoV9F3MOxo9wIBkcyhUNDCsq3srJD1CWSY/edit#gid=518032628',
              orangeBookings: 'https://docs.google.com/spreadsheets/d/1czTiDKINy7JVuWt2RMWngAXhLomeAJJWaNvXpl_Q96c/edit#gid=518032628',
              blueBookings: 'https://docs.google.com/spreadsheets/d/1mJedIovkvIsQLWueRa_YCQuQuzChS1NTmOon1VcppUM/edit#gid=518032628',

              greenInformation: 'https://docs.google.com/spreadsheets/d/1fketn2L0jPSqjvdoPnaYYhf52aNimxYvHO5jLlcblwE/edit#gid=1558407356',
              pinkInformation: 'https://docs.google.com/spreadsheets/d/1eHMN3xpuVAJAuHEss_rMJbHubkcyCOtN0CM-iK7zxT0/edit#gid=1558407356',
              yellowInformation: 'https://docs.google.com/spreadsheets/d/1pkoCBKnYfsoV9F3MOxo9wIBkcyhUNDCsq3srJD1CWSY/edit#gid=1558407356',
              orangeInformation: 'https://docs.google.com/spreadsheets/d/1czTiDKINy7JVuWt2RMWngAXhLomeAJJWaNvXpl_Q96c/edit#gid=1558407356',
              blueInformation: 'https://docs.google.com/spreadsheets/d/1mJedIovkvIsQLWueRa_YCQuQuzChS1NTmOon1VcppUM/edit#gid=1558407356',

              homeRecordings: 'https://docs.google.com/spreadsheets/d/1NQCIYGLw3dJtDraa_Gfb0yGwXJzPcOaWJ-7iaOtkxCU/edit#gid=460924080',
            },
            //--|▼| March |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1ymQDcaBJqU6eyPSMnfqW9jApR2FI9JuwHivkD_u9JPM/edit#gid=518032628',
              pinkBookings: 'https://docs.google.com/spreadsheets/d/17mjOhhivvXIuZepcRD-Su2kaQ-L-47zyg6xumtMo_RM/edit#gid=518032628',
              yellowBookings: 'https://docs.google.com/spreadsheets/d/19rpETRO6BPUaDeoXMbVlrcKKprAOmZQmo4xatlMvVPE/edit#gid=518032628',
              orangeBookings: 'https://docs.google.com/spreadsheets/d/1EGSSlcal6rDAiqLGcMiHTkUkNZ_p0SkXFxUYfzC36Dc/edit#gid=518032628',
              blueBookings: 'https://docs.google.com/spreadsheets/d/1lAnDOFlkiIQgX5-Tnvht25zMUW9CKMrwdlOtlQQGCTk/edit#gid=518032628',

              greenInformation: 'https://docs.google.com/spreadsheets/d/1ymQDcaBJqU6eyPSMnfqW9jApR2FI9JuwHivkD_u9JPM/edit#gid=1558407356',
              pinkInformation: 'https://docs.google.com/spreadsheets/d/17mjOhhivvXIuZepcRD-Su2kaQ-L-47zyg6xumtMo_RM/edit#gid=1558407356',
              yellowInformation: 'https://docs.google.com/spreadsheets/d/19rpETRO6BPUaDeoXMbVlrcKKprAOmZQmo4xatlMvVPE/edit#gid=1558407356',
              orangeInformation: 'https://docs.google.com/spreadsheets/d/1EGSSlcal6rDAiqLGcMiHTkUkNZ_p0SkXFxUYfzC36Dc/edit#gid=1558407356',
              blueInformation: 'https://docs.google.com/spreadsheets/d/1lAnDOFlkiIQgX5-Tnvht25zMUW9CKMrwdlOtlQQGCTk/edit#gid=1558407356',

              homeRecordings: 'https://docs.google.com/spreadsheets/d/1NQCIYGLw3dJtDraa_Gfb0yGwXJzPcOaWJ-7iaOtkxCU/edit#gid=1325340061',
            },
            //--|▼| April |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1YKAxP9HMq12bCl_kYQj59scyHzV7p9z_bICYLqkdxys/edit#gid=518032628',
              pinkBookings: 'https://docs.google.com/spreadsheets/d/1Bj4tAWJmPD1KvJGmDr9BUgzVepCCyf2qYxivyzHma_M/edit#gid=518032628',
              yellowBookings: 'https://docs.google.com/spreadsheets/d/1Yu1XI4HBPuwRXQRYOhIDfTJc9jvwMgT338Ush3ALqIY/edit#gid=518032628',
              orangeBookings: 'https://docs.google.com/spreadsheets/d/1Zj9l-4ZI_izhaINSae-iKz3h-Kf297tZutC4uFJmM1o/edit#gid=518032628',
              blueBookings: 'https://docs.google.com/spreadsheets/d/1Q6a-5wmRg_U55BBBtGMr72Nxv2Ik2fJyfZdpJ5uasAs/edit#gid=518032628',

              greenInformation: 'https://docs.google.com/spreadsheets/d/1YKAxP9HMq12bCl_kYQj59scyHzV7p9z_bICYLqkdxys/edit#gid=1558407356',
              pinkInformation: 'https://docs.google.com/spreadsheets/d/1Bj4tAWJmPD1KvJGmDr9BUgzVepCCyf2qYxivyzHma_M/edit#gid=1558407356',
              yellowInformation: 'https://docs.google.com/spreadsheets/d/1Yu1XI4HBPuwRXQRYOhIDfTJc9jvwMgT338Ush3ALqIY/edit#gid=1558407356',
              orangeInformation: 'https://docs.google.com/spreadsheets/d/1Zj9l-4ZI_izhaINSae-iKz3h-Kf297tZutC4uFJmM1o/edit#gid=1558407356',
              blueInformation: 'https://docs.google.com/spreadsheets/d/1Q6a-5wmRg_U55BBBtGMr72Nxv2Ik2fJyfZdpJ5uasAs/edit#gid=1558407356',

              homeRecordings: 'https://docs.google.com/spreadsheets/d/1NQCIYGLw3dJtDraa_Gfb0yGwXJzPcOaWJ-7iaOtkxCU/edit#gid=892125226',
            },
            //--|▼| May |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1SSFW3eawlL1WlbXFkNIidzf3Ts6nYluY9iIEwjzJTUA/edit#gid=518032628',
              pinkBookings: 'https://docs.google.com/spreadsheets/d/15OCKaEL9BuUmuccxWBiy_FTb0sJPHqqsxs4b70yt2QE/edit#gid=518032628',
              yellowBookings: 'https://docs.google.com/spreadsheets/d/1AVcon0tHd0MgXiagne1a4TXR3-tBLik-b58fLYgIe-U/edit#gid=518032628',
              orangeBookings: 'https://docs.google.com/spreadsheets/d/1RzwMWcGwYqd82tIAwA-uNBkchM3PjFtYSa5saOZmOnU/edit#gid=518032628',
              blueBookings: 'https://docs.google.com/spreadsheets/d/1ekpvHjnjsgst8cGGXFEByYyTp450za_BHfDe-VbZe9s/edit#gid=518032628',

              greenInformation: 'https://docs.google.com/spreadsheets/d/1SSFW3eawlL1WlbXFkNIidzf3Ts6nYluY9iIEwjzJTUA/edit#gid=1558407356',
              pinkInformation: 'https://docs.google.com/spreadsheets/d/15OCKaEL9BuUmuccxWBiy_FTb0sJPHqqsxs4b70yt2QE/edit#gid=1558407356',
              yellowInformation: 'https://docs.google.com/spreadsheets/d/1AVcon0tHd0MgXiagne1a4TXR3-tBLik-b58fLYgIe-U/edit#gid=1558407356',
              orangeInformation: 'https://docs.google.com/spreadsheets/d/1RzwMWcGwYqd82tIAwA-uNBkchM3PjFtYSa5saOZmOnU/edit#gid=1558407356',
              blueInformation: 'https://docs.google.com/spreadsheets/d/1ekpvHjnjsgst8cGGXFEByYyTp450za_BHfDe-VbZe9s/edit#gid=1558407356',

              homeRecordings: 'https://docs.google.com/spreadsheets/d/1NQCIYGLw3dJtDraa_Gfb0yGwXJzPcOaWJ-7iaOtkxCU/edit#gid=336508742',
            },
            //--|▼| June |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1GnJDB7y8b46zOkZVCWczZpBGK_2_gsctNlG4owKf9I0/edit#gid=518032628',
              pinkBookings: 'https://docs.google.com/spreadsheets/d/15XrW3usezUz9eg5kSxWKz6vIW3zlSkmKUPdMulcKO2I/edit#gid=518032628',
              yellowBookings: 'https://docs.google.com/spreadsheets/d/1IS9hgkrZMXSBvO5a0auynHHyiZccZaU3OkjzrJLvlZk/edit#gid=518032628',
              orangeBookings: 'https://docs.google.com/spreadsheets/d/1UkFlPggxDVj5cW3VWFfmdTuXA4_Iu93FNaa6pgunALg/edit#gid=518032628',
              blueBookings: 'https://docs.google.com/spreadsheets/d/1X7EfTRYnNa2MCS4S4iyTki_UW2gvHznOTP_OE7UeO58/edit#gid=518032628',

              greenInformation: 'https://docs.google.com/spreadsheets/d/1GnJDB7y8b46zOkZVCWczZpBGK_2_gsctNlG4owKf9I0/edit#gid=1558407356',
              pinkInformation: 'https://docs.google.com/spreadsheets/d/15XrW3usezUz9eg5kSxWKz6vIW3zlSkmKUPdMulcKO2I/edit#gid=1558407356',
              yellowInformation: 'https://docs.google.com/spreadsheets/d/1IS9hgkrZMXSBvO5a0auynHHyiZccZaU3OkjzrJLvlZk/edit#gid=1558407356',
              orangeInformation: 'https://docs.google.com/spreadsheets/d/1UkFlPggxDVj5cW3VWFfmdTuXA4_Iu93FNaa6pgunALg/edit#gid=1558407356',
              blueInformation: 'https://docs.google.com/spreadsheets/d/1X7EfTRYnNa2MCS4S4iyTki_UW2gvHznOTP_OE7UeO58/edit#gid=1558407356',

              homeRecordings: 'https://docs.google.com/spreadsheets/d/1NQCIYGLw3dJtDraa_Gfb0yGwXJzPcOaWJ-7iaOtkxCU/edit#gid=1201357802',
            },
            //--|▼| July |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1lULKJsioPKoSltf-PvHhulRqypx8acHnVyO9pWFn9tk/edit#gid=518032628',
              pinkBookings: 'https://docs.google.com/spreadsheets/d/1d-4FpmWDk0p2bJnlrrBDCGlpbVQTDOxr1TT18li7WaU/edit#gid=518032628',
              yellowBookings: 'https://docs.google.com/spreadsheets/d/1XeWn_cZ0HiFua0qApQgJ5t-oVy5k74bdDPiZ6Kw916g/edit#gid=518032628',
              orangeBookings: 'https://docs.google.com/spreadsheets/d/1rgEifdlB1vRy1YSF6ocqWcbkQY_HH2B01F_ARBwfG64/edit#gid=518032628',
              blueBookings: 'https://docs.google.com/spreadsheets/d/1WvqiwBTaSNiks9d6BHHhvAeJjQ_5ys3jBzNmnaEctKc/edit#gid=518032628',

              greenInformation: 'https://docs.google.com/spreadsheets/d/1lULKJsioPKoSltf-PvHhulRqypx8acHnVyO9pWFn9tk/edit#gid=1558407356',
              pinkInformation: 'https://docs.google.com/spreadsheets/d/1d-4FpmWDk0p2bJnlrrBDCGlpbVQTDOxr1TT18li7WaU/edit#gid=1558407356',
              yellowInformation: 'https://docs.google.com/spreadsheets/d/1XeWn_cZ0HiFua0qApQgJ5t-oVy5k74bdDPiZ6Kw916g/edit#gid=1558407356',
              orangeInformation: 'https://docs.google.com/spreadsheets/d/1rgEifdlB1vRy1YSF6ocqWcbkQY_HH2B01F_ARBwfG64/edit#gid=1558407356',
              blueInformation: 'https://docs.google.com/spreadsheets/d/1WvqiwBTaSNiks9d6BHHhvAeJjQ_5ys3jBzNmnaEctKc/edit#gid=1558407356',

              homeRecordings: 'https://docs.google.com/spreadsheets/d/1NQCIYGLw3dJtDraa_Gfb0yGwXJzPcOaWJ-7iaOtkxCU/edit#gid=1687060489',
            },
            //--|▼| August |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1mTdfF2X5kbFnS41_UKHSfafVvgAYbIrz-ZfjP2bj6Mo/edit#gid=518032628',
              pinkBookings: 'https://docs.google.com/spreadsheets/d/1-WCMnr0iIevMc2N4GP3JyrfBHxgPxiRfqnfgDC4xKsk/edit#gid=518032628',
              yellowBookings: 'https://docs.google.com/spreadsheets/d/12kwG4PxBDYrMCi3FlVQupz-ErL8NFmrQhtTLXs-hOKo/edit#gid=518032628',
              orangeBookings: 'https://docs.google.com/spreadsheets/d/1eeawV7G7OFi3JEZScj-9Bx_0o33MIgYg4gMHaCIuUac/edit#gid=518032628',
              blueBookings: 'https://docs.google.com/spreadsheets/d/1mRQoJGd3WMAAe8z9HgNoYfygSSesLbKa4OCcAWSZO0k/edit#gid=518032628',

              greenInformation: 'https://docs.google.com/spreadsheets/d/1mTdfF2X5kbFnS41_UKHSfafVvgAYbIrz-ZfjP2bj6Mo/edit#gid=1558407356',
              pinkInformation: 'https://docs.google.com/spreadsheets/d/1-WCMnr0iIevMc2N4GP3JyrfBHxgPxiRfqnfgDC4xKsk/edit#gid=1558407356',
              yellowInformation: 'https://docs.google.com/spreadsheets/d/12kwG4PxBDYrMCi3FlVQupz-ErL8NFmrQhtTLXs-hOKo/edit#gid=1558407356',
              orangeInformation: 'https://docs.google.com/spreadsheets/d/1eeawV7G7OFi3JEZScj-9Bx_0o33MIgYg4gMHaCIuUac/edit#gid=1558407356',
              blueInformation: 'https://docs.google.com/spreadsheets/d/1mRQoJGd3WMAAe8z9HgNoYfygSSesLbKa4OCcAWSZO0k/edit#gid=1558407356',

              homeRecordings: 'https://docs.google.com/spreadsheets/d/1NQCIYGLw3dJtDraa_Gfb0yGwXJzPcOaWJ-7iaOtkxCU/edit#gid=1216170643',
            },
            //--|▼| September |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1l3LkeLGPtcZFS51Q7tKU5clTmmn5YjG2CT6_9fX8OTw/edit#gid=518032628',
              pinkBookings: 'https://docs.google.com/spreadsheets/d/1C7MsPXk-BJUylTwCB2Ilxmmcgd1H-TsL3Cejbv4RjgI/edit#gid=518032628',
              yellowBookings: 'https://docs.google.com/spreadsheets/d/147XqdImYHWrTVmXPaJPYAGIQUS_RguNNscDeTVTJCjo/edit#gid=518032628',
              orangeBookings: 'https://docs.google.com/spreadsheets/d/1s5uHQqFF8cbu4KYDpQja50V_n_t_k6S1ZOoEhNd7ggg/edit#gid=518032628',
              blueBookings: 'https://docs.google.com/spreadsheets/d/1qGjPBzdE4IF6ZfMqfh8Ug7VXN8fth2BPYduCddOueUQ/edit#gid=518032628',

              greenInformation: 'https://docs.google.com/spreadsheets/d/1l3LkeLGPtcZFS51Q7tKU5clTmmn5YjG2CT6_9fX8OTw/edit#gid=1558407356',
              pinkInformation: 'https://docs.google.com/spreadsheets/d/1C7MsPXk-BJUylTwCB2Ilxmmcgd1H-TsL3Cejbv4RjgI/edit#gid=1558407356',
              yellowInformation: 'https://docs.google.com/spreadsheets/d/147XqdImYHWrTVmXPaJPYAGIQUS_RguNNscDeTVTJCjo/edit#gid=1558407356',
              orangeInformation: 'https://docs.google.com/spreadsheets/d/1s5uHQqFF8cbu4KYDpQja50V_n_t_k6S1ZOoEhNd7ggg/edit#gid=1558407356',
              blueInformation: 'https://docs.google.com/spreadsheets/d/1qGjPBzdE4IF6ZfMqfh8Ug7VXN8fth2BPYduCddOueUQ/edit#gid=1558407356',

              homeRecordings: 'https://docs.google.com/spreadsheets/d/1NQCIYGLw3dJtDraa_Gfb0yGwXJzPcOaWJ-7iaOtkxCU/edit#gid=6152905',
            },
            //--|▼| October |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/19UHXWortoK2X1V5yAmi1G44abCkHBuFMtJghLed-wQ8/edit#gid=518032628',
              pinkBookings: 'https://docs.google.com/spreadsheets/d/1IQNiToHU-Tygu1Jx-mScLTgSPc2OBDcVVsBUKqhH1ko/edit#gid=518032628',
              yellowBookings: 'https://docs.google.com/spreadsheets/d/1UI-aEEHvtcRdeggZk7id8eXzbzNI2j4KT2ZUdP3wu6A/edit#gid=518032628',
              orangeBookings: 'https://docs.google.com/spreadsheets/d/1tzlWARhCyo_SSTY-5lXSjYbWvVfVBPkfmd8E5iDAZCE/edit#gid=518032628',
              blueBookings: 'https://docs.google.com/spreadsheets/d/1_dmPNOAKqXdGqWAcTFM_q7C-yRVWILwqLxtOirC2xnE/edit#gid=518032628',

              greenInformation: 'https://docs.google.com/spreadsheets/d/19UHXWortoK2X1V5yAmi1G44abCkHBuFMtJghLed-wQ8/edit#gid=1558407356',
              pinkInformation: 'https://docs.google.com/spreadsheets/d/1IQNiToHU-Tygu1Jx-mScLTgSPc2OBDcVVsBUKqhH1ko/edit#gid=1558407356',
              yellowInformation: 'https://docs.google.com/spreadsheets/d/1UI-aEEHvtcRdeggZk7id8eXzbzNI2j4KT2ZUdP3wu6A/edit#gid=1558407356',
              orangeInformation: 'https://docs.google.com/spreadsheets/d/1tzlWARhCyo_SSTY-5lXSjYbWvVfVBPkfmd8E5iDAZCE/edit#gid=1558407356',
              blueInformation: 'https://docs.google.com/spreadsheets/d/1_dmPNOAKqXdGqWAcTFM_q7C-yRVWILwqLxtOirC2xnE/edit#gid=1558407356',

              homeRecordings: 'https://docs.google.com/spreadsheets/d/1NQCIYGLw3dJtDraa_Gfb0yGwXJzPcOaWJ-7iaOtkxCU/edit#gid=1541070592',
            },
            //--|▼| November |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/1pW-cIryu3BM7ZwuoQED2y-1okxOUY45Chl05pAe88aU/edit#gid=518032628',
              pinkBookings: 'https://docs.google.com/spreadsheets/d/17GXp-hdKZ2PAdGmYqaH2OX2XPeQKziao5oHfzaQ4E_s/edit#gid=518032628',
              yellowBookings: 'https://docs.google.com/spreadsheets/d/1_wYddiYr8O0NhU9wsaARfyMbv8prlIEit8_7jxPlcXU/edit#gid=518032628',
              orangeBookings: 'https://docs.google.com/spreadsheets/d/1QieS2l6tYlGDO5wXWvAJ6FEPJdHqhevbPAoIHean2nw/edit#gid=518032628',
              blueBookings: 'https://docs.google.com/spreadsheets/d/1n0t_9Bg5y94C2F53erIAiRdlS-VWj3VbujAPZqg6KWs/edit#gid=518032628',

              greenInformation: 'https://docs.google.com/spreadsheets/d/1pW-cIryu3BM7ZwuoQED2y-1okxOUY45Chl05pAe88aU/edit#gid=1558407356',
              pinkInformation: 'https://docs.google.com/spreadsheets/d/17GXp-hdKZ2PAdGmYqaH2OX2XPeQKziao5oHfzaQ4E_s/edit#gid=1558407356',
              yellowInformation: 'https://docs.google.com/spreadsheets/d/1_wYddiYr8O0NhU9wsaARfyMbv8prlIEit8_7jxPlcXU/edit#gid=1558407356',
              orangeInformation: 'https://docs.google.com/spreadsheets/d/1QieS2l6tYlGDO5wXWvAJ6FEPJdHqhevbPAoIHean2nw/edit#gid=1558407356',
              blueInformation: 'https://docs.google.com/spreadsheets/d/1n0t_9Bg5y94C2F53erIAiRdlS-VWj3VbujAPZqg6KWs/edit#gid=1558407356',

              homeRecordings: 'https://docs.google.com/spreadsheets/d/1NQCIYGLw3dJtDraa_Gfb0yGwXJzPcOaWJ-7iaOtkxCU/edit#gid=219658864',
            },
            //--|▼| December |▼|--//
            {
              greenBookings: 'https://docs.google.com/spreadsheets/d/15TemIN1c1zXBRR3_Ujgu6xf-Ck2EvEqooKQLDjyIPmM/edit#gid=518032628',
              pinkBookings: 'https://docs.google.com/spreadsheets/d/1EKQql8P1wRgwJQADEP92uMHynIAi1HlWZul1OtbHebs/edit#gid=518032628',
              yellowBookings: 'https://docs.google.com/spreadsheets/d/1luAWPbeprtUyXItb3c7dgn_2I5NWpCj438fuZ9xnUiw/edit#gid=518032628',
              orangeBookings: 'https://docs.google.com/spreadsheets/d/1ANg7_pTSwXv9y9X9XECsh7G_4McMDZsNSBl8wQF4cG0/edit#gid=518032628',
              blueBookings: 'https://docs.google.com/spreadsheets/d/1HdqHXBL42PyunVTePBcDg7MOfVXdqPU9_qza795wXkA/edit#gid=518032628',

              greenInformation: 'https://docs.google.com/spreadsheets/d/15TemIN1c1zXBRR3_Ujgu6xf-Ck2EvEqooKQLDjyIPmM/edit#gid=1558407356',
              pinkInformation: 'https://docs.google.com/spreadsheets/d/1EKQql8P1wRgwJQADEP92uMHynIAi1HlWZul1OtbHebs/edit#gid=1558407356',
              yellowInformation: 'https://docs.google.com/spreadsheets/d/1luAWPbeprtUyXItb3c7dgn_2I5NWpCj438fuZ9xnUiw/edit#gid=1558407356',
              orangeInformation: 'https://docs.google.com/spreadsheets/d/1ANg7_pTSwXv9y9X9XECsh7G_4McMDZsNSBl8wQF4cG0/edit#gid=1558407356',
              blueInformation: 'https://docs.google.com/spreadsheets/d/1HdqHXBL42PyunVTePBcDg7MOfVXdqPU9_qza795wXkA/edit#gid=1558407356',

              homeRecordings: 'https://docs.google.com/spreadsheets/d/1NQCIYGLw3dJtDraa_Gfb0yGwXJzPcOaWJ-7iaOtkxCU/edit#gid=1812340211',
            },
          ];
        case 'data':
          break;
      }
    }
  }

  export class Administrasie {
    constructor(block: 'body' | 'header' | 'main' | 'sidebar' | 'footer' | 'overlay' | 'data') {
      switch (block) {
        case 'body':
          break;
        case 'header':
          break;
        case 'main':
          break;
        case 'sidebar':
          break;
        case 'footer':
          break;
        case 'overlay':
          break;
        case 'data':
          break;
      }
    }
  }

  export class Operasioneel {
    constructor(block: 'body' | 'header' | 'main' | 'sidebar' | 'footer' | 'overlay' | 'data') {
      switch (block) {
        case 'body':
          break;
        case 'header':
          break;
        case 'main':
          break;
        case 'sidebar':
          break;
        case 'footer':
          break;
        case 'overlay':
          break;
        case 'data':
          break;
      }
    }
  }
}
