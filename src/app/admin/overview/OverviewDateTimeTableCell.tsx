"use client";
import {  formatDateTime } from "@/lib/utils";

export default function OverviewDateTimeTableCell({date}: {date: Date}) {
  return (
    <>{formatDateTime(date).dateOnly}</>
  )
}