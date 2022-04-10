import { fork, all } from "redux-saga/effects";
import map from "lodash/map";

import searchData from './SearchData';

const combinedSagas = [
    searchData.saga
];

export default function* root() {
    yield all(map(combinedSagas, fork));
}