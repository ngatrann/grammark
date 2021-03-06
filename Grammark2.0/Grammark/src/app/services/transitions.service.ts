import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TransitionsService {

  //variables for transistions score
  private transitionsAlertColor = new BehaviorSubject<string>(" ");
  currentTransitionsAlertColor = this.transitionsAlertColor.asObservable();

  private transitionsFeedback = new BehaviorSubject<string>(" ");
  currentTransitionsFeedback = this.transitionsFeedback.asObservable();

  private transitionsScore = new BehaviorSubject<number>(0);
  currentTransitionsScore = this.transitionsScore.asObservable();

  //private totalSentences = new BehaviorSubject<number>(0);
  //currentTotalSentences = this.totalSentences.asObservable();

  private totalTransitions = new BehaviorSubject<number>(0);
  currentTotalTransitions = this.totalTransitions.asObservable();

  //this table contains all of the transition words
  private transitionsTable = new BehaviorSubject<any>({
    'above all': '',
    'accordingly': '',
    'additionally': '',
    'after all': '',
    'afterward': '',
    'albeit': '',
    'all in all': '',
    'all of a sudden': '',
    'all things considered': '',
    'also': '',
    'although': '',
    'altogether': '',
    'another key point': '',
    'as a matter of fact': '',
    'as a result': '',
    'as an illustration': '',
    'as can be seen': '',
    'as has been noted': '',
    'as shown above': '',
    'as soon as': '',
    'as well as': '',
    'at the present time': '',
    'at the same time': '',
    'at this instant': '',
    'basically': '',
    'be that as it may': '',
    'because of': '',
    'besides': '',
    'by all means': '',
    'by and large': '',
    'by the same token': '',
    'certainly': '',
    'chiefly': '',
    'comparatively': '',
    'consequently': '',
    'conversely': '',
    'correspondingly': '',
    'despite': '',
    'different from': '',
    'due to': '',
    'equally': '',
    'equally important': '',
    'especially': '',
    'even so': '',
    'eventually': '',
    'expressively': '',
    'finally': '',
    'firstly': '',
    'first thing to remember': '',
    'following': '',
    'for example': '',
    'for fear that': '',
    'for instance': '',
    'for one thing': '',
    'for the most part': '',
    'for the purpose of': '',
    'for this reason': '',
    'formerly': '',
    'forthwith': '',
    'frequently': '',
    'from time to time': '',
    'further': '',
    'furthermore': '',
    'generally speaking': '',
    'given that': '',
    'given these points': '',
    'hence': '',
    'henceforth': '',
    'however': '',
    'identically': '',
    'immediately': '',
    'important to realize': '',
    'in a moment': '',
    'in a word': '',
    'in addition': '',
    'in any event': '',
    'in brief': '',
    'in case': '',
    'in conclusion': '',
    'in contrast': '',
    'in detail': '',
    'in due time': '',
    'in either case': '',
    'in essence': '',
    'in fact': '',
    'in general': '',
    'in light of': '',
    'in like manner': '',
    'in order to': '',
    'in other words': '',
    'in particular': '',
    'in reality': '',
    'in short': '',
    'in spite of': '',
    'in summary': '',
    'in that case': '',
    'in the event that': '',
    'in the final analysis': '',
    'in the first place': '',
    'in the hope that': '',
    'in the long run': '',
    'in the meantime': '',
    'in the same way': '',
    'in this case': '',
    'in time': '',
    'in view of': '',
    'inasmuch as': '',
    'indeed': '',
    ' lest ': '',
    'likewise': '',
    'markedly': '',
    'meanwhile': '',
    'moreover': '',
    'most compelling evidence': '',
    'must be remembered': '',
    'namely': '',
    'nevertheless': '',
    'next': '',
    'not only': '',
    'not to mention': '',
    'notably': '',
    'notwithstanding': '',
    'of course': '',
    'on balance': '',
    'on the condition that': '',
    'on the contrary': '',
    'on the other hand': '',
    'on the positive / negative side': '',
    'on the whole': '',
    'ordinarily': '',
    'otherwise': '',
    'overall': '',
    'owing to': '',
    'point often overlooked': '',
    'prior to': '',
    'provided that': '',
    'quickly': '',
    'rather': '',
    'regardless': '',
    'secondly': '',
    'significantly': '',
    'similarly': '',
    'since': '',
    'so as to': '',
    'so long as': '',
    'so that': '',
    'sooner or later': '',
    'specifically': '',
    'straightaway': '',
    'subsequently': '',
    'such as': '',
    'surely': '',
    'surprisingly': '',
    'that is to say': '',
    'then again': '',
    'therefore': '',
    'thereupon': '',
    'thirdly': '',
    'thus': '',
    'to be sure': '',
    'to begin with': '',
    'to clarify': '',
    'to demonstrate': '',
    'to emphasize': '',
    'to enumerate': '',
    'to explain': '',
    'to point out': '',
    'to put it another way': '',
    'to put it differently': '',
    'to repeat': '',
    'to say nothing of': '',
    'to sum up': '',
    'to summarize': '',
    'to the end that': '',
    'together with': '',
    'truly': '',
    'under those circumstances': '',
    'uniquely': '',
    'unless': '',
    'until now': '',
    'up to the present time': '',
    'usually': '',
    'whenever': '',
    'whereas': '',
    'with attention to': '',
    'with this in mind': '',
    'with this intention': '',
    'without delay': ''
  });
  currentTransitionsTable = this.transitionsTable.asObservable();

  // this table will contain the user's transition words
  private transitionsUserTable = new BehaviorSubject<any>({});
  currentTransitionsUserTable = this.transitionsUserTable.asObservable();

  constructor() { }

  changeTransitionsScore(transitionsScore: number) {
    this.transitionsScore.next(transitionsScore);
  }

  //changeTotalSentences(totalSentences: number) {
  //  this.totalSentences.next(totalSentences);
  //}

  changeTotalTransitions(totalTransitions: number) {
    this.totalTransitions.next(totalTransitions);
  }

  changeTable(table: any) {
    this.transitionsTable.next(table);
  }

  changeTransitionsUserTable(transitionsUserTable: any) {
    this.transitionsUserTable.next(transitionsUserTable);
  }

  changeTransitionsFeedback(transitionsFeedback: string) {
    this.transitionsFeedback.next(transitionsFeedback);
  }

  changeTransitionsAlertColor(transitionsAlertColor: string) {
    this.transitionsAlertColor.next(transitionsAlertColor);
  }

  //resetTransitionFix(){
  //  this.transitionsFeedback.next(" ");
  //  this.transitionsScore.next(0);
  //  this.totalSentences.next(0);
  //  this.totalTransitions.next(0);
  //}
}
