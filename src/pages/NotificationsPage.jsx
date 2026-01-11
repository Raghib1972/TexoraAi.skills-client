import React from "react";
import { useLocation } from "react-router-dom";

const NotificationsPage = () => {
  const { pathname } = useLocation();
  const isStudent = pathname.startsWith("/student");
  const isTrainer = pathname.startsWith("/trainer");
  const isAdmin = pathname.startsWith("/admin");
  const isBusiness = pathname.startsWith("/business");

  let notifications;

  if (isStudent) {
    notifications = [
      {
        id: 1,
        title: "New assignment published",
        description: "React Basics assignment has been added to your course.",
        time: "5 min ago",
        type: "assignment",
      },
      {
        id: 2,
        title: "Quiz scheduled",
        description: "JavaScript quiz scheduled for tomorrow 7 PM.",
        time: "1 hr ago",
        type: "quiz",
      },
    ];
  } else if (isTrainer) {
    notifications = [
      {
        id: 1,
        title: "New doubt raised",
        description: "1 new doubt in React Hooks topic (Batch A).",
        time: "10 min ago",
        type: "doubt",
      },
      {
        id: 2,
        title: "Attendance pending",
        description: "Today’s Batch B attendance not marked yet.",
        time: "2 hr ago",
        type: "attendance",
      },
    ];
  } else if (isAdmin) {
    notifications = [
      {
        id: 1,
        title: "New user registered",
        description: "A new student account awaits approval.",
        time: "15 min ago",
        type: "user",
      },
      {
        id: 2,
        title: "Revenue report ready",
        description: "Monthly revenue report for LMS is generated.",
        time: "3 hr ago",
        type: "report",
      },
    ];
  } else if (isBusiness) {
    notifications = [
      {
        id: 1,
        title: "New lead assigned",
        description: "A new corporate lead has been assigned to you.",
        time: "20 min ago",
        type: "lead",
      },
      {
        id: 2,
        title: "Invoice payment received",
        description: "Payment received for invoice INV-101.",
        time: "1 hr ago",
        type: "payment",
      },
      {
        id: 3,
        title: "Campaign performance updated",
        description: "Winter Offer campaign performance report is ready.",
        time: "3 hr ago",
        type: "campaign",
      },
    ];
  } else {
    notifications = [];
  }

  const heading = isStudent
    ? "Your notifications"
    : isTrainer
    ? "Trainer notifications"
    : isAdmin
    ? "Admin notifications"
    : isBusiness
    ? "Business notifications"
    : "Notifications";

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-100">{heading}</h1>
          <p className="mt-1 text-sm text-slate-400">
            {isStudent &&
              "Assignments, quizzes, course updates aur system alerts yahan dikhte hain."}
            {isTrainer &&
              "Batches, students, doubts aur assessment related alerts yahan dikhte hain."}
            {isAdmin &&
              "User approvals, system status aur revenue related alerts yahan dikhte hain."}
            {isBusiness &&
              "Leads, enrollments, invoices aur campaigns se related alerts yahan dikhte hain."}
            {!isStudent && !isTrainer && !isAdmin && !isBusiness &&
              "Recent alerts from the system."}
          </p>
        </div>

        <button className="text-xs text-violet-400 hover:text-violet-300">
          Mark all as read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.length === 0 && (
          <p className="text-sm text-slate-400">Abhi koi notification nahi hai.</p>
        )}

        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 rounded-lg border border-slate-700/70 bg-slate-900/70 px-4 py-3"
          >
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-sm">
              {item.type === "assignment" && "📘"}
              {item.type === "quiz" && "📝"}
              {item.type === "doubt" && "❓"}
              {item.type === "attendance" && "📊"}
              {item.type === "user" && "👤"}
              {item.type === "report" && "📑"}
              {item.type === "lead" && "📈"}
              {item.type === "payment" && "💳"}
              {item.type === "campaign" && "📢"}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-slate-100">
                  {item.title}
                </h2>
                <span className="text-[11px] text-slate-500">{item.time}</span>
              </div>
              <p className="mt-1 text-xs text-slate-400">{item.description}</p>
            </div>

            <span className="mt-1 h-2 w-2 rounded-full bg-violet-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
